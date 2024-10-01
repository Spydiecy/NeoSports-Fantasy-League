# NeoSports Fantasy League

NeoSports Fantasy League is a cutting-edge fantasy sports platform built on the Neo X blockchain. It offers a transparent, secure, and immersive fantasy sports experience with real-time match tracking, blockchain-based transactions, and smart contract-powered reward distribution.

![image](https://github.com/user-attachments/assets/cf230584-3313-49c7-a8a1-99950928d8bc)

([Live demo](https://neo-sports-fantasy-league-alpha.vercel.app))

## Table of Contents

1. [Features](#features)
2. [Scoring System](#scoring-system)
3. [Tech Stack](#tech-stack)
4. [Smart Contracts](#smart-contracts)
5. [Getting Started](#getting-started)
6. [Usage](#usage)
7. [License](#license)

## Features

### User-friendly Team Creation and Management
- Intuitive interface for selecting players
- Real-time budget tracking
- Automated team validation ensuring adherence to selection rules

### Real-time Match Tracking and Scoring
- Live updates of player performances
- Instant calculation of fantasy points
- Visual representation of team performance during matches

### Transparent Reward Calculation and Distribution
- Smart contract-based reward pool creation and distribution
- Automatic calculation and distribution of rewards post-match
- Verifiable transaction history on the blockchain

### Blockchain-based Transactions
- Secure entry fee payments using GAS tokens
- Instant reward payouts
- Immutable record of all financial transactions

### Multiple Contest Types
- Gold Contests: Higher entry fees, larger reward pools
- Bronze Contests: Lower entry fees, ideal for beginners

### User Profiles and Transaction History
- Detailed user statistics and performance history
- Complete record of contest participations
- Transparent display of earnings and transactions

### Rewards Calculator
- Interactive tool for estimating potential returns
- Adjustable parameters for different contest types
- Real-time calculations based on current platform data

## Scoring System

Our comprehensive scoring system ensures a fair and exciting fantasy sports experience. Points are awarded for various actions performed by players during a match:

### Football (Soccer) Scoring:

#### Shots
- Total shots: 1 point
- Shots on goal: 2 points

#### Goals
- Goals scored: 10 points
- Goal assists: 6 points
- Goals conceded: -2 points (for goalkeepers and defenders)
- Own goals: -3 points

#### Fouls
- Fouls drawn: 2 points
- Fouls committed: -2 points

#### Cards
- Yellow cards: -3 points
- Red cards: -5 points

#### Passing
- Total crosses: 2 points
- Crosses accuracy: 2 points for >50% < 70%, 4 points for >70%
- Passes: 1 point
- Accurate passes: 2 points
- Passes accuracy: 3 points for >50% < 70%, 6 points for >70%
- Key passes: 3 points

#### Dribbles
- Dribble attempts: 1 point for 1 attempt
- Successful dribbles: 5 points
- Dribbled past: 3 points

#### Duels
- Duels won: 2 points

#### Other
- Aerials won: 3 points
- Offsides: -1 point
- Saves: 2 points
- Inside box saves: 3 points
- Penalties scored: 7 points
- Penalties missed: -5 points
- Penalties saved: 7 points
- Penalties won: 3 points
- Hit woodwork: 3 points
- Tackles: 3 points
- Blocks: 5 points
- Interceptions: 3 points
- Clearances: 1 point for each clearance
- Dispossessed: -3 points
- Minutes played: 1 point for <60 minutes, 2 points for >=60 minutes

This scoring system is designed to reward all aspects of play, ensuring that defenders and goalkeepers are as valuable as attacking players.

## Tech Stack

- Frontend: React.js
- Backend: Node.js
- Blockchain: Neo X TestNet
- Smart Contracts: Solidity
- Styling: Tailwind CSS, NextUI
- Web3 Integration: ethers.js

## Smart Contracts

All smart contracts are deployed on the Neo X TestNet.

1. UserManager Contract
   - Address: `0x040165C55e824f0221CF9a44f920fDb565B7aADA`
   - Functionality: Manages user registration and profiles

2. FantasyFootball Contract
   - Address: `0xa84ccf2422afccadfc0d88430b4f6fe590063f89`
   - Functionality: Handles match creation, team registration, scoring, and reward distribution

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or Yarn
- MetaMask wallet with Neo X TestNet configured
- GAS tokens for the Neo X TestNet (for transaction fees and contest entry)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/neosports-fantasy-league.git
   cd neosports-fantasy-league
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```
   REACT_APP_RPC_URL=https://neoxt4seed1.ngd.network
   REACT_APP_CHAIN_ID=12227332
   REACT_APP_USER_MANAGER_ADDRESS=0x040165C55e824f0221CF9a44f920fDb565B7aADA
   REACT_APP_FANTASY_FOOTBALL_ADDRESS=0xa84ccf2422afccadfc0d88430b4f6fe590063f89
   ```

4. Start the development server:
   ```
   npm start
   # or
   yarn start
   ```

5. Open `http://localhost:3000` in your browser.

## Usage

1. Connect your MetaMask wallet to the application.
2. Register a new account or login if you already have one.
3. Browse available matches and contests in the Matches page.
4. Click on a match to view details and create your team.
5. Select players for your team, ensuring you stay within the budget and follow team composition rules.
6. Join contests by paying the entry fee in GAS.
7. Track your team's performance in real-time during matches in the Live Scoring section.
8. After the match, view your final score and any rewards earned in your User Profile.
9. Use the Rewards Calculator to estimate potential earnings for future contests.

## License

This project is licensed under the [MIT License](LICENSE).
