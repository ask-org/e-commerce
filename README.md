# E-commerce project for ASK-DEV


## Git habits 

### Cloning the repository

```bash
# Step 1. Clone the project
git clone https://github.com/ask-org/e-commerce.git

# Step 2. Create a local branch you want to work on 
git checkout -b [your branch name]
```

### Pulling any latest updates

```bash
# Step 1. commit your latest code in your working branch
git add .
git commit -m "Commit message here"

# Setp 2. Checkout into testing and pull any latest updates
git checkout testing
git pull origin testing

# Step 3. Go back to your original branch
git checkout [your branch name]
git merge testing
```

### Pushing the latest updates 

```bash
# Step 1. commit your latest code in your working branch
git add .
git commit -m "Commit message here"

# Setp 2. Checkout into testing and pull any latest updates
git checkout testing
git pull origin testing

# Step 2. Crete a local branch you want to work on 
git checkout [your branch name]
```

### Pulling any latest updates to your local branch

```bash
# Step 1. commit your latest code in your working branch
git add .
git commit -m "Commit message here"

# Setp 2. Checkout into testing and pull any latest updates
git checkout testing
git pull origin testing

# Step 3. Merge your latest commit into the testing branch
git merge [your branch name]
```

