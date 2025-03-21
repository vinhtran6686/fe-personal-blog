# Git Branching Strategy

This document outlines the Git branching strategy for the Personal Blog Website project.

## Main Branches

- **main** - Production-ready code. Each commit to this branch should be deployable to production.
- **develop** - Integration branch for features. This is where features are merged before being promoted to main.

## Supporting Branches

- **feature/** - Feature branches for new functionality. Branch from and merge back to develop.
  - Example: `feature/user-authentication`
  
- **bugfix/** - Branches for fixing bugs in the development environment. Branch from and merge back to develop.
  - Example: `bugfix/comment-submission`
  
- **hotfix/** - Branches for critical fixes in production. Branch from main and merge to both main and develop.
  - Example: `hotfix/security-vulnerability`
  
- **release/** - Branches for preparing releases. Branch from develop and merge to main and develop.
  - Example: `release/v1.0.0`

## Workflow

1. Create a new feature or bugfix branch from develop:
   ```
   git checkout develop
   git pull
   git checkout -b feature/new-feature
   ```

2. Make changes and commit them:
   ```
   git add .
   git commit -m "feat: Add new feature"
   ```

3. Push branch to remote repository:
   ```
   git push -u origin feature/new-feature
   ```

4. Create a Pull Request to merge into develop

5. After review and approval, merge the PR

6. When ready for release:
   ```
   git checkout develop
   git pull
   git checkout -b release/v1.0.0
   ```

7. Make any release-specific adjustments, then merge to main:
   ```
   git checkout main
   git merge release/v1.0.0 --no-ff
   git tag -a v1.0.0 -m "Version 1.0.0"
   git push origin main --tags
   ```

8. Merge release back to develop:
   ```
   git checkout develop
   git merge release/v1.0.0 --no-ff
   git push origin develop
   ```

## Commit Message Format

Follow the Conventional Commits format:

- `feat: Add new feature`
- `fix: Resolve bug`
- `docs: Update documentation`
- `style: Format code (no functional changes)`
- `refactor: Restructure code`
- `test: Add or update tests`
- `chore: Update build process or tools`

## Pull Request Guidelines

- Ensure all tests pass
- Include a clear description of changes
- Reference related issues
- Request at least one reviewer
- Squash commits when merging 