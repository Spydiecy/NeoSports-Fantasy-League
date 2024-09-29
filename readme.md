# NeoSports Fantasy League Scoring System Whitepaper

## 1. Introduction

The NeoSports Fantasy League scoring system is designed to provide a fair, engaging, and comprehensive method for evaluating player performance in cricket matches. This system rewards players for their on-field actions and achievements, closely mirroring the real-world impact of their performance while adding excitement to the fantasy sports experience.

## 2. Scoring Categories

### 2.1 Batting

| Action                   | Points |
|--------------------------|--------|
| Run scored               | 1      |
| Boundary bonus (four)    | 1      |
| Boundary bonus (six)     | 2      |
| Half-century bonus       | 10     |
| Century bonus            | 25     |
| Double century bonus     | 50     |
| Duck (dismissed for 0)   | -5     |

### 2.2 Bowling

| Action                            | Points |
|-----------------------------------|--------|
| Wicket (caught, bowled, LBW, etc.)| 25     |
| Bonus for LBW or Bowled           | 5      |
| Maiden over                       | 10     |
| 3 wicket haul bonus               | 20     |
| 5 wicket haul bonus               | 50     |

### 2.3 Fielding

| Action                   | Points |
|--------------------------|--------|
| Catch taken              | 10     |
| Stumping                 | 15     |
| Run out (direct hit)     | 15     |
| Run out (indirect)       | 10     |

### 2.4 Economy Rate (min. 2 overs bowled)

| Economy Rate     | Points |
|------------------|--------|
| Below 4 runs/over| 15     |
| 4-5.99 runs/over | 10     |
| 6-8 runs/over    | 5      |
| 8-10 runs/over   | 0      |
| Above 10 runs/over| -5     |

### 2.5 Strike Rate (min. 10 balls faced)

| Strike Rate      | Points |
|------------------|--------|
| Above 170        | 15     |
| 150.01-170       | 10     |
| 130.01-150       | 5      |
| 60-80            | -5     |
| Below 60         | -10    |

## 3. Special Bonuses

### 3.1 Player Impact

| Achievement            | Points |
|------------------------|--------|
| Player of the Match    | 25     |
| Game-Changing Moment   | 10     |

### 3.2 Partnership Bonus

For partnerships of 50+ runs:
- Both players receive 5 points
- Additional 2 points for every 25 runs thereafter

### 3.3 Death Over Performance (Last 5 overs of an innings)

- Batting: Double points for all runs scored
- Bowling: Double points for all wickets taken

### 3.4 Power Play Performance

- Batting: 1 additional point per boundary in power play overs
- Bowling: 5 additional points per wicket in power play overs

## 4. Format-Specific Scoring

### 4.1 T20 Matches

- All points are calculated as described in sections 2 and 3

### 4.2 One Day Internationals (ODIs)

- All points are calculated as described in sections 2 and 3
- Additional 10 points for batting through the entire innings

### 4.3 Test Matches

- Runs and wickets are worth 1.5 times the points of limited-over formats
- Additional 50 points for scoring a double century
- Additional 25 points for a five-wicket haul
- Additional 50 points for a ten-wicket haul in the match

## 5. Negative Points

| Action                             | Points |
|------------------------------------|--------|
| Drop Catch                         | -5     |
| Stumping Missed                    | -10    |
| Run Out Missed (direct hit chance) | -5     |

## 6. Point Calculation and Updates

1. Points are calculated in real-time based on official match statistics provided by authorized data feeds.
2. The ScoringEngine smart contract processes these statistics and updates player points.
3. Users can view point updates live during matches on the NeoSports Fantasy League platform.
4. Final points are confirmed within 1 hour of the match conclusion, subject to any official statistical corrections.

## 7. Dispute Resolution

1. Users can raise disputes regarding scoring discrepancies within 24 hours of the match conclusion.
2. Disputes are reviewed by a DAO-elected committee.
3. Committee decisions are final and implemented through a smart contract update.

## 8. Technological Implementation

1. Smart Contracts: The scoring system is implemented through smart contracts on the Neo X blockchain, ensuring transparency and immutability of scores.
2. Oracle Integration: Reliable cricket data oracles are used to feed real-world match data into the smart contracts.
3. Gas Optimization: The scoring calculations are optimized to minimize gas costs on the Neo X network, ensuring efficient and cost-effective operations.

## 9. Future Enhancements

1. Dynamic Scoring: Implementation of an AI-driven system to adjust point values based on the rarity and impact of player actions in real-time.
2. Multi-Sport Expansion: Development of scoring systems for additional sports as the platform expands.
3. Community Governance: Integration of DAO voting mechanisms to allow users to propose and vote on changes to the scoring system.

## 10. Conclusion

The NeoSports Fantasy League scoring system is designed to create an engaging, fair, and exciting fantasy sports experience. By leveraging the transparency and efficiency of the Neo X blockchain, we ensure that all scoring is verifiable and updated in real-time, providing users with a cutting-edge fantasy sports platform.
 and antoher readme is:# NeoSports Fantasy League Technical Architecture Overview

## 1. System Components

### 1.1 Blockchain Layer
- Neo X Blockchain: The foundation for all on-chain operations
- Smart Contracts: Solidity-based contracts deployed on Neo X

### 1.2 Backend Services
- Node.js API Server: Handles off-chain operations and serves as an intermediary between the frontend and blockchain
- Data Aggregation Service: Collects and processes real-time sports data

### 1.3 Frontend Application
- React-based Web Application: Provides the user interface for interacting with the platform
- Mobile-responsive design for cross-device compatibility

### 1.4 Data Sources
- Sports Data API: Provides real-time match data and statistics
- Blockchain Indexer: Indexes Neo X blockchain data for efficient querying

### 1.5 Infrastructure
- Cloud Hosting: For backend services and frontend hosting
- IPFS: For decentralized storage of user data and game assets

## 2. Smart Contract Architecture

### 2.1 Core Contracts
- UserManager.sol: Handles user registration and profile management
- TeamManager.sol: Manages team creation and updates
- LeagueManager.sol: Governs league creation, joining, and rules
- ScoringEngine.sol: Calculates and updates player scores
- TokenContract.sol: ERC20 contract for platform's native token
- NFTContract.sol: ERC721 contract for player cards and achievements

### 2.2 Auxiliary Contracts
- OracleManager.sol: Interfaces with external data sources
- GovernanceContract.sol: Handles DAO voting and platform upgrades

## 3. Data Flow

1. User Interaction → Frontend Application
2. Frontend → Backend API → Smart Contracts
3. Smart Contracts ↔ Blockchain
4. Sports Data API → Data Aggregation Service → OracleManager Contract
5. ScoringEngine Contract → TeamManager Contract → LeagueManager Contract

## 4. Key Processes

### 4.1 User Registration
1. User connects wallet to dApp
2. Frontend calls UserManager contract to register user
3. User data stored on-chain with IPFS hash for extended profile data

### 4.2 Team Creation
1. User selects players through Frontend
2. Backend validates team composition
3. TeamManager contract creates team on-chain

### 4.3 Scoring Update
1. Data Aggregation Service processes live match data
2. OracleManager pushes data to ScoringEngine
3. ScoringEngine calculates new scores
4. TeamManager and LeagueManager contracts updated with new scores

### 4.4 Reward Distribution
1. LeagueManager determines winners
2. TokenContract distributes rewards
3. NFTContract mints achievement NFTs

## 5. Security Measures

- Multi-signature wallets for critical contracts
- Rate limiting on API endpoints
- Comprehensive smart contract auditing
- Secure Oracle data feeds with multiple validators

## 6. Scalability Considerations

- Optimized smart contract interactions to minimize gas costs
- Efficient indexing of blockchain data for quick querying
- Potential for Layer 2 solutions for high-frequency updates

## 7. Integration Points

- Wallet Integration: MetaMask, NeoLine, and other Neo X-compatible wallets
- Data Providers: Integration with reliable sports data APIs
- IPFS Integration: For decentralized storage of user data and game assets

## 8. Development and Deployment Workflow

1. Local Development Environment
2. Testnet Deployment and Testing
3. Security Audit
4. Mainnet Deployment
5. Continuous Integration/Continuous Deployment (CI/CD) pipeline

## 9. Monitoring and Maintenance

- Blockchain Network Monitoring
- Smart Contract Event Logging
- Backend Service Health Checks
- Real-time Error Tracking and Alerting

## 10. Future Scalability and Upgrades

- Upgradable smart contracts for future enhancements
- Modular architecture to easily add new sports and game modes
- Preparation for cross-chain functionality with other Neo ecosystem chains

This technical architecture provides a robust foundation for the NeoSports Fantasy League, leveraging the strengths of the Neo X blockchain while ensuring scalability, security, and user experience.
and another readme is and another readme is# NeoSports Fantasy League MVP Document

## 1. Overview

This MVP (Minimum Viable Product) outlines the core features to be implemented for the NeoSports Fantasy League hackathon project. The focus is on creating a functional fantasy cricket platform on the Neo X blockchain, demonstrating key blockchain integration points and essential fantasy sports mechanics.

## 2. Core Features

### 2.1 User Registration and Authentication
- Wallet connection (Neo X compatible wallets)
- Username selection
- Basic profile creation

### 2.2 Team Creation and Management
- Player selection interface (limited to a single tournament or series)
- Basic budget management
- Team saving functionality

### 2.3 League System
- Public league creation
- Joining existing leagues
- Display of league standings

### 2.4 Scoring System
- Implementation of basic scoring rules for cricket
- Real-time score updates during matches
- Display of user's team score

### 2.5 Rewards Distribution
- Calculation of rewards based on league standings
- Distribution of GAS tokens to winners

## 3. Smart Contracts

### 3.1 UserManager.sol
- Functions: registerUser, updateUsername
- Storage: user profiles, linked wallet addresses

### 3.2 TeamManager.sol
- Functions: createTeam, updateTeam, getTeamDetails
- Storage: user teams, player selections

### 3.3 LeagueManager.sol
- Functions: createLeague, joinLeague, getLeagueStandings
- Storage: league details, participants

### 3.4 ScoringEngine.sol
- Functions: updateScores, calculateTeamScore
- Integration with OracleManager for data inputs

### 3.5 RewardsDistributor.sol
- Functions: calculateRewards, distributeRewards
- Handles GAS token transfers to winners

## 4. Frontend Components

### 4.1 Home Page
- User dashboard with quick access to teams and leagues
- Upcoming matches display

### 4.2 Team Creation Page
- Player selection interface
- Budget visualization
- Save team functionality

### 4.3 League Browser
- List of available public leagues
- League join button
- Create new league option

### 4.4 Match Center
- Live match scores (mocked for MVP)
- User's team performance for ongoing matches

### 4.5 Profile Page
- Display user information
- Show owned teams
- League participation history

## 5. Backend Services

### 5.1 Data Aggregation Service
- Mock cricket match data generation
- Simulated real-time updates

### 5.2 API Endpoints
- User data management
- Team and league data retrieval
- Score updates

## 6. Blockchain Integration Points

- Wallet connection for user authentication
- Team creation and updates
- League creation and joining
- Score recording
- Reward distribution in GAS

## 7. Data Flow

1. User creates/updates team → TeamManager.sol
2. User joins league → LeagueManager.sol
3. Mock match data → Data Aggregation Service → OracleManager.sol
4. OracleManager.sol → ScoringEngine.sol
5. ScoringEngine.sol updates scores → LeagueManager.sol
6. End of league → RewardsDistributor.sol calculates and distributes rewards

## 8. Out of Scope for MVP

- Real-time sports data integration (use mocked data)
- Advanced analytics and statistics
- Social features (comments, sharing)
- Multiple sports or tournaments
- Mobile app (focus on responsive web app)

## 9. Future Enhancements

- Integration with real sports data APIs
- Expansion to multiple sports and tournaments
- Implementation of daily/weekly contests
- Advanced team management features
- Social and community features

This MVP focuses on delivering a functional fantasy sports experience on the Neo X blockchain, demonstrating the core mechanics and blockchain integration points. It provides a solid foundation for future expansion and refinement post-hackathon.
and antoher readme is:# NeoSports Fantasy League Rewards Calculator

## 1. Introduction

The NeoSports Fantasy League Rewards Calculator is designed to fairly and transparently distribute rewards to players based on their performance in fantasy leagues. This system aims to incentivize participation, reward skill, and maintain user engagement throughout the season.

## 2. Reward Pool

### 2.1 Pool Formation
- Each league has its own reward pool
- The pool is formed from:
  - League entry fees (if applicable)
  - Platform contribution (a percentage of platform revenue)

### 2.2 Pool Distribution
- 90% of the pool is distributed to winners
- 10% is retained for platform maintenance and development

## 3. Reward Distribution

### 3.1 Season-Long Leagues

| Position | Percentage of Pool |
|----------|-------------------|
| 1st      | 35%               |
| 2nd      | 20%               |
| 3rd      | 15%               |
| 4th      | 10%               |
| 5th      | 5%                |
| 6th-10th | 1% each           |

### 3.2 Daily/Weekly Leagues

| Position | Percentage of Pool |
|----------|-------------------|
| 1st      | 50%               |
| 2nd      | 30%               |
| 3rd      | 20%               |

## 4. Reward Calculation

### 4.1 Formula
```
User Reward = (User's Position Percentage) * (Total Reward Pool) * 0.9
```

### 4.2 Example
For a season-long league with a 1000 GAS reward pool:
- 1st place: 1000 * 0.35 * 0.9 = 315 GAS
- 2nd place: 1000 * 0.20 * 0.9 = 180 GAS
- 3rd place: 1000 * 0.15 * 0.9 = 135 GAS

## 5. Tiebreakers

In case of a tie, the rewards for the tied positions are combined and split equally among the tied users.

## 6. Minimum Participation Requirement

To be eligible for rewards, users must:
- Have participated in at least 80% of the matches in a season-long league
- Have a complete, valid team entry for daily/weekly leagues

## 7. Reward Distribution Process

1. League concludes
2. Final standings are calculated
3. Reward amounts are computed based on standings
4. Smart contract distributes rewards to user wallets
5. Users receive notification of reward receipt

## 8. Special Rewards

### 8.1 Consistency Bonus
- Awarded to users who maintain a top 25% position throughout the season
- 5% of the reward pool is allocated for this bonus

### 8.2 Underdog Bonus
- Awarded to the user with the biggest climb in rankings from mid-season to end-season
- 2% of the reward pool is allocated for this bonus

## 9. Reward Tokens

- Primary rewards are distributed in GAS tokens
- Future considerations for a native platform token (NSFL) with additional benefits

## 10. Transparency and Verification

- All reward calculations and distributions are recorded on the Neo X blockchain
- Users can verify reward distributions through blockchain explorers
- A transparent log of all rewards is maintained and accessible through the platform

## 11. Adjustments and Governance

- The reward structure can be adjusted through community governance
- Any changes will be announced at least one full season in advance
- Emergency changes (e.g., in case of exploits) can be made by the platform with immediate effect, subject to community review

This reward calculator ensures a fair, transparent, and engaging reward system for the NeoSports Fantasy League, leveraging the transparency and efficiency of the Neo X blockchain.
 generate a well decriptied readme from combination of these and deployemnt adn tell about deplyment that is deplpydon vercel and link    https://neosportsfantasyleague.vercel.app/  is and it is a uqnie hackathion project and kmgive brefif dexript of 3-4 main efatures that atre including in website