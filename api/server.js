// api/server.js

import { readFileSync } from 'fs';

const HOME = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>HPE - Hewlett Packard Enterprise | Accelerate Your Digital Transformation</title><meta name="description" content="Unlock the full potential of your data with HPE's innovative solutions. Explore our hybrid cloud, AI & data analytics, and edge computing solutions."><meta name="keywords" content="HPE, Hewlett Packard Enterprise, digital transformation, hybrid cloud, AI, data analytics, edge computing"><meta property="og:title" content="HPE - Hewlett Packard Enterprise | Accelerate Your Digital Transformation"><meta property="og:description" content="Unlock the full potential of your data with HPE's innovative solutions. Explore our hybrid cloud, AI & data analytics, and edge computing solutions."><meta property="og:image" content="https://www.hpe.com/content/dam/hpe/shared-publishing/images/homepage/hero-banner/homepage-hero-banner-1920x1080.jpg"><meta property="og:url" content="https://www.hpe.com"><meta name="twitter:card" content="summary_large_image"><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"><style>body {font-family: 'Roboto', sans-serif;margin: 0;padding: 0;background-color: #f4f4f4;color: #333;}header {background-color: #01a982;padding: 20px 0;box-shadow: 0 2px 5px rgba(0,0,0,0.1);}.container {width: 80%;margin: 0 auto;}nav {display: flex;justify-content: space-between;align-items: center;}.logo {font-size: 24px;font-weight: bold;color: white;}.nav-links a {color: white;text-decoration: none;margin-left: 20px;transition: opacity 0.3s ease;}.nav-links a:hover {opacity: 0.8;}.hero {background-image: url('https://www.hpe.com/content/dam/hpe/shared-publishing/images/homepage/hero-banner/homepage-hero-banner-1920x1080.jpg');background-size: cover;background-position: center;height: 500px;display: flex;align-items: center;justify-content: center;text-align: center;color: white;}.hero-content h1 {font-size: 48px;margin-bottom: 20px;}.hero-content p {font-size: 24px;margin-bottom: 30px;}.cta-button {background-color: #01a982;color: white;padding: 12px 24px;text-decoration: none;border-radius: 5px;font-weight: bold;transition: background-color 0.3s ease;}.cta-button:hover {background-color: #018c6c;}.features {display: flex;justify-content: space-between;padding: 50px 0;}.feature {flex-basis: 30%;text-align: center;padding: 20px;background-color: white;border-radius: 5px;box-shadow: 0 2px 5px rgba(0,0,0,0.1);}.feature h2 {color: #01a982;}footer {background-color: #333;color: white;text-align: center;padding: 20px 0;}</style></head><body><header><div class="container"><nav><div class="logo">HPE</div><div class="nav-links"><a href="#">Products</a><a href="#">Solutions</a><a href="#">Services</a><a href="#">About</a><a href="#">Contact</a></div></nav></div></header><main><section class="hero"><div class="hero-content"><h1>Accelerate Your Digital Transformation</h1><p>Unlock the full potential of your data with HPE's innovative solutions</p><a href="#" class="cta-button">Learn More</a></div></section><section class="container features"><div class="feature"><h2>Hybrid Cloud</h2><p>Optimize your IT infrastructure with our flexible hybrid cloud solutions.</p></div><div class="feature"><h2>AI & Data Analytics</h2><p>Harness the power of AI and data analytics to drive business growth.</p></div><div class="feature"><h2>Edge Computing</h2><p>Bring computing power closer to your data sources with edge solutions.</p></div></section></main><footer><div class="container"><p>© 2023 Hewlett Packard Enterprise. All rights reserved.</p></div></footer></body></html>`;

const SETTINGS = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Advanced Settings</title><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"><style>:root {--primary-color: #3498db;--secondary-color: #2ecc71;--background-color: #f5f7fa;--text-color: #34495e;--border-color: #bdc3c7;}* {margin: 0;padding: 0;box-sizing: border-box;}body {font-family: 'Roboto', sans-serif;background-color: var(--background-color);color: var(--text-color);line-height: 1.6;}.container {max-width: 1200px;margin: 0 auto;padding: 2rem;}h1 {font-size: 2.5rem;font-weight: 700;text-align: center;margin-bottom: 2rem;color: var(--primary-color);}.settings-grid {display: grid;grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));gap: 2rem;}.settings-card {background-color: #fff;border-radius: 10px;box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);padding: 1.5rem;transition: transform 0.3s ease;}.settings-card:hover {transform: translateY(-5px);}.settings-card h2 {font-size: 1.5rem;font-weight: 500;margin-bottom: 1rem;color: var(--primary-color);}.form-group {margin-bottom: 1rem;}label {display: block;font-weight: 500;margin-bottom: 0.5rem;}input[type="text"],input[type="email"],input[type="password"],select {width: 100%;padding: 0.75rem;border: 1px solid var(--border-color);border-radius: 5px;font-size: 1rem;transition: border-color 0.3s ease;}input[type="text"]:focus,input[type="email"]:focus,input[type="password"]:focus,select:focus {outline: none;border-color: var(--primary-color);}.toggle-switch {position: relative;display: inline-block;width: 60px;height: 34px;}.toggle-switch input {opacity: 0;width: 0;height: 0;}.slider {position: absolute;cursor: pointer;top: 0;left: 0;right: 0;bottom: 0;background-color: #ccc;transition: .4s;border-radius: 34px;}.slider:before {position: absolute;content: "";height: 26px;width: 26px;left: 4px;bottom: 4px;background-color: white;transition: .4s;border-radius: 50%;}input:checked + .slider {background-color: var(--secondary-color);}input:checked + .slider:before {transform: translateX(26px);}.btn {display: inline-block;background-color: var(--primary-color);color: #fff;padding: 0.75rem 1.5rem;border: none;border-radius: 5px;font-size: 1rem;font-weight: 500;cursor: pointer;transition: background-color 0.3s ease;}.btn:hover {background-color: #2980b9;}.btn-save {display: block;width: 100%;margin-top: 2rem;background-color: var(--secondary-color);}.btn-save:hover {background-color: #27ae60;}@media (max-width: 768px) {.settings-grid {grid-template-columns: 1fr;}}</style></head><body><div class="container"><h1>Advanced Settings</h1><form id="settings-form"><div class="settings-grid"><div class="settings-card"><h2>Account Settings</h2><div class="form-group"><label for="username">Username</label><input type="text" id="username" name="username" required></div><div class="form-group"><label for="email">Email</label><input type="email" id="email" name="email" required></div><div class="form-group"><label for="password">Password</label><input type="password" id="password" name="password" required></div></div><div class="settings-card"><h2>Notification Preferences</h2><div class="form-group"><label for="email-notifications">Email Notifications</label><label class="toggle-switch"><input type="checkbox" id="email-notifications" name="email-notifications"><span class="slider"></span></label></div><div class="form-group"><label for="push-notifications">Push Notifications</label><label class="toggle-switch"><input type="checkbox" id="push-notifications" name="push-notifications"><span class="slider"></span></label></div></div><div class="settings-card"><h2>Privacy Settings</h2><div class="form-group"><label for="profile-visibility">Profile Visibility</label><select id="profile-visibility" name="profile-visibility"><option value="public">Public</option><option value="friends">Friends Only</option><option value="private">Private</option></select></div><div class="form-group"><label for="data-sharing">Data Sharing</label><label class="toggle-switch"><input type="checkbox" id="data-sharing" name="data-sharing"><span class="slider"></span></label></div></div></div><button type="submit" class="btn btn-save">Save Changes</button></form></div><script>document.getElementById('settings-form').addEventListener('submit', function(e) {e.preventDefault();alert('Settings saved successfully!');});</script></body></html>`;

const DASHBOARD = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Sophisticated Dashboard</title><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"><style>* {margin: 0;padding: 0;box-sizing: border-box;}body {font-family: 'Roboto', sans-serif;background-color: #f0f2f5;color: #333;}.dashboard {display: flex;min-height: 100vh;}.sidebar {width: 250px;background-color: #2c3e50;color: #ecf0f1;padding: 20px;}.logo {font-size: 24px;font-weight: 700;margin-bottom: 30px;}.nav-item {margin-bottom: 15px;}.nav-link {color: #ecf0f1;text-decoration: none;display: flex;align-items: center;padding: 10px;border-radius: 5px;transition: background-color 0.3s;}.nav-link:hover {background-color: #34495e;}.nav-link i {margin-right: 10px;}.main-content {flex: 1;padding: 30px;}.header {display: flex;justify-content: space-between;align-items: center;margin-bottom: 30px;}.header h1 {font-size: 28px;font-weight: 500;}.user-info {display: flex;align-items: center;}.user-info img {width: 40px;height: 40px;border-radius: 50%;margin-right: 10px;}.grid {display: grid;grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));gap: 20px;}.card {background-color: #fff;border-radius: 10px;box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);padding: 20px;}.card-header {font-size: 18px;font-weight: 500;margin-bottom: 15px;}.card-content {font-size: 24px;font-weight: 700;}.chart-container {height: 300px;}</style><script src="https://cdn.jsdelivr.net/npm/chart.js"></script></head><body><div class="dashboard"><aside class="sidebar"><div class="logo">Dashboard</div><nav><div class="nav-item"><a href="#" class="nav-link"><i class="fas fa-home"></i> Home</a></div><div class="nav-item"><a href="#" class="nav-link"><i class="fas fa-chart-bar"></i> Analytics</a></div><div class="nav-item"><a href="#" class="nav-link"><i class="fas fa-users"></i> Users</a></div><div class="nav-item"><a href="#" class="nav-link"><i class="fas fa-cog"></i> Settings</a></div></nav></aside><main class="main-content"><header class="header"><h1>Dashboard Overview</h1><div class="user-info"><img src="https://via.placeholder.com/40" alt="User Avatar"><span>John Doe</span></div></header><div class="grid"><div class="card"><div class="card-header">Total Users</div><div class="card-content">10,234</div></div><div class="card"><div class="card-header">Revenue</div><div class="card-content">$52,345</div></div><div class="card"><div class="card-header">Conversion Rate</div><div class="card-content">3.2%</div></div><div class="card"><div class="card-header">Active Users</div><div class="card-content">1,423</div></div></div><div class="card" style="margin-top: 20px;"><div class="card-header">User Growth</div><div class="chart-container"><canvas id="userGrowthChart"></canvas></div></div></main></div><script>const ctx = document.getElementById('userGrowthChart').getContext('2d');new Chart(ctx, {type: 'line',data: {labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],datasets: [{label: 'User Growth',data: [1000, 1500, 2000, 2500, 3000, 3500],borderColor: '#3498db',tension: 0.1}]},options: {responsive: true,maintainAspectRatio: false,scales: {y: {beginAtZero: true}}}});</script></body></html>`

const ERROR = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>404 - Page Not Found</title><style>body {font-family: Arial, sans-serif;background-color: #f0f0f0;display: flex;justify-content: center;align-items: center;height: 100vh;margin: 0;}.container {text-align: center;background-color: white;padding: 2rem;border-radius: 10px;box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);}h1 {font-size: 4rem;color: #e74c3c;margin-bottom: 1rem;}p {font-size: 1.2rem;color: #34495e;margin-bottom: 2rem;}a {display: inline-block;background-color: #3498db;color: white;text-decoration: none;padding: 0.8rem 1.5rem;border-radius: 5px;transition: background-color 0.3s ease;}a:hover {background-color: #2980b9;}</style></head><body><div class="container"><h1>404</h1><p>Oops! The page you're looking for seems to have vanished into thin air.</p><a href="/">Return to Home</a></div></body></html>`


const USER = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>User Profile</title><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"><style>body {font-family: 'Roboto', sans-serif;background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);margin: 0;padding: 0;min-height: 100vh;display: flex;justify-content: center;align-items: center;}.container {background-color: #ffffff;border-radius: 15px;box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);overflow: hidden;width: 100%;max-width: 800px;}.header {background: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);color: #ffffff;padding: 30px;text-align: center;}.header h1 {margin: 0;font-size: 2.5em;font-weight: 700;}.content {padding: 30px;}.profile-info {display: flex;align-items: center;margin-bottom: 30px;}.profile-pic {width: 150px;height: 150px;border-radius: 50%;object-fit: cover;margin-right: 30px;border: 5px solid #ffffff;box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);}.user-details h2 {margin: 0 0 10px 0;color: #333333;}.user-details p {margin: 5px 0;color: #666666;}.stats {display: flex;justify-content: space-around;background-color: #f8f9fa;padding: 20px;border-radius: 10px;}.stat-item {text-align: center;}.stat-item h3 {margin: 0;color: #2575fc;font-size: 1.8em;}.stat-item p {margin: 5px 0 0 0;color: #666666;font-size: 0.9em;}.bio {margin-top: 30px;}.bio h3 {color: #333333;margin-bottom: 10px;}.bio p {color: #666666;line-height: 1.6;}</style></head><body><div class="container"><div class="header"><h1>User Profile</h1></div><div class="content"><div class="profile-info"><img src="https://via.placeholder.com/150" alt="Profile Picture" class="profile-pic"><div class="user-details"><h2>John Doe</h2><p>@johndoe</p><p>Web Developer | Coffee Enthusiast</p><p>San Francisco, CA</p></div></div><div class="stats"><div class="stat-item"><h3>1.5K</h3><p>Followers</p></div><div class="stat-item"><h3>500</h3><p>Following</p></div><div class="stat-item"><h3>120</h3><p>Projects</p></div></div><div class="bio"><h3>About Me</h3><p>Passionate web developer with 5+ years of experience in creating responsive and user-friendly websites. Always eager to learn new technologies and improve my skills. When I'm not coding, you can find me exploring new coffee shops or hiking in the great outdoors.</p></div></div></div></body></html>`

export default function handler(req, res) {
  const { url } = req;
  let filePath;

  switch (url) {
    case '/dashboard':
      filePath = DASHBOARD;
      break;
    case '/settings':
      filePath = SETTINGS;
      break;
    case '/':
      filePath = HOME;
      break;
    case '/user':
      filePath = USER;
      break;
    default:
      filePath = ERROR;
  }

  try {
    res.status(200).send(content);
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).send('Error reading file: ' + error.message + '\n\n\n' + JSON.stringify(error));
  }
}