# GitHub Pages Deployment Setup

## What was configured:

### 1. GitHub Actions Workflow
- **File**: `.github/workflows/deploy.yml`
- **Purpose**: Automatically builds and deploys the Angular application to GitHub Pages when code is pushed to the main branch
- **Features**:
  - Builds with correct base href (`/pos-dev-lab-front/`)
  - Creates 404.html from index.html for SPA routing support
  - Deploys to `gh-pages` branch

### 2. Package.json Scripts
- **Added**: `build:github-pages` script
- **Purpose**: Builds the application with the correct base href for GitHub Pages

### 3. README.md Updates
- **Added**: Deployment information and live URL
- **Purpose**: Documents the deployment process for developers

## What you need to do next:

### 1. Enable GitHub Pages in Repository Settings
1. Go to your repository: https://github.com/uthendevelop/pos-dev-lab-front
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch
6. Click "Save"

### 2. Merge this PR to main branch
- Once this PR is merged to main, the GitHub Actions workflow will automatically trigger
- The workflow will build the application and deploy it to GitHub Pages
- Your application will be available at: https://uthendevelop.github.io/pos-dev-lab-front/

### 3. Monitor the deployment
- After merging, go to the "Actions" tab in your repository
- You should see the deployment workflow running
- Once complete, your site will be live

## Expected Result:
Your POS application will be accessible at: **https://uthendevelop.github.io/pos-dev-lab-front/**

The application includes:
- Order page with product selection
- Checkout functionality
- Receipt generation
- Report viewing
- Responsive design for mobile and desktop

## Troubleshooting:
- If the deployment fails, check the Actions tab for error messages
- Ensure GitHub Pages is enabled in repository settings
- Verify that the gh-pages branch exists after the first deployment