--
id: wsl
title: wsl
--

## WSL Subnet

To setup a new network in your NAT'ed interface in WSL you have to edit in the registry.
The keys can be found under this path: "Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Lxss".
There can be two keys there have to be changed. They can be changed to the following: 
    - NatGatewayIpAddress   = `192.168.0.1`
    - NatNetwork            = `192.168.0.0/24`

Afterwards you have to restart your PC. When thats done open a WSL window and check the network interfaces if they have been changed to the new network.

