
Vagrant.configure("2") do |config|
   config.vm.box = "ubuntu/jammy64"

  #  forwarding frontend port 
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  #  forwarding backend port
  config.vm.network "forwarded_port", guest: 5000, host: 5000
end
