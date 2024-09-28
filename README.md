# GraphraseAi


## Overview

GraphraseAi is a cutting-edge platform built on the Internet Computer (ICP) that leverages advanced artificial intelligence to enhance your writing experience. Whether you need to paraphrase content, check grammar, or simplify text, GraphraseAi provides a seamless and efficient solution tailored for students, professionals, and anyone seeking clarity in their written communication.


## Data Flow

1. User provide Note and select the action(paraphrase,grammer-check or text simplify).

2. Note get send to ChatGpt Api.

3. response display once generated

4. Login user are allowed to save their note and ai generated response

5. navigate to dashboard to perfom CRUD operation



### Prerequisites

requirements:

- **dfx**: You have installed the latest version of the DFINITY Canister SDK, `dfx`. You can download it from the DFINITY SDK page. [installation guide](https://demergent-labs.github.io/azle/get_started.html#installation)

 ```
  use version dfx 0.22.0
 ```
- **Node.js**: You have installed Node.js, version 18 or above.
```
 v20.12.2

```
- Azle version use 
 ```
  azle 0.24.1
 ```

 - podman verion use

 ```
  podman version 3.4.4
  
 ```
Please ensure all these prerequisites are met before proceeding with the setup of the project.

### Recommendation:

For seamless run,get your_openai_api_key before you proceed
```
 go to src/frontend/src/callApiAi.js assign your key to a variable call CHATGPT_API_KEY
```


# Running the project locally

If you want to test your project locally, you can use the following commands:

Cloning repo:

```bash
git clone https://github.com/Rherve250/GraphraseAi.git
cd GraphraseAi
```


### to install and deploy Step by Step Follow below commands:

```bash

# Installing Dependencies
npm i

# Starts the replica, running in the background
dfx start --host 127.0.0.1:8000 --clean --background

# Deploys
dfx deploy
or

AZLE_AUTORELOAD=true dfx deploy
```

your application will be available at `http://localhost:8000?canisterId={asset_canister_id}`.
` http://{canisterId}.localhost:8000/`
