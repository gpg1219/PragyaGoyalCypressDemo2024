# Cypress Test Automation Framework

## Overview

This repository contains an automated testing framework built using Cypress . The framework is designed to provide a scalable and maintainable framework for writing and executing end-to-end tests.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Planned Improvements](#improvements)

## Features

- **Page Object Model (POM):** Organize your tests using the Page Object Model for improved maintainability and reusability.
- **Test Data Handling:** Manage test data effectively to create a robust and scalable test suite.

## Prerequisites

- [Node.js](https://nodejs.org/) installed locally

## Getting Started

1. Install dependencies::

   ```terminal
   npm install

2. Run Cypress Ui::

   ```terminal
   npx cypress open

## Project Structure

cypress/
  ├── fixtures/            # Test data files
  ├── e2e/                 # Test scripts
  ├── pages                # Pages with page objects
  ├── support/             # Custom commands and utilities
  └── mochawesome-report/  # Reports 

## Running Tests

1. Execute all tests in Headless Mode::
     ```terminal
     npx cypress run
2. Execute all tests in Headed Mode::
     ```terminal
     npx cypress run --headed
3. Execute all tests and Genertae Report::
     ```terminal
     npx cypress run --reporter mochawesome

## Configuration

 - Configure Base Url: Navigate to cypress.config.js and change the baseUrl inside e2e to desired baseurl
 - Activate/Deactivate Test isolation : Navigate to cypress.config.js and change the below Values Accordingly
    - To Activate - testIsolation:true,
    - To Dectivate - testIsolation:false,

## Improvements

- Implement Custom commands and utilities for both UI and API tests
- Add more test cases for both UI and API
- Integrate with CI/CD 
- Improve reporting to run after every test run
