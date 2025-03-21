# Git Workflow and Branching Strategy

This document outlines the Git workflow and branching strategy for the personal blog website project.

## Branching Strategy: GitFlow

We are following a modified GitFlow branching model that fits the scale and needs of our project.

### Main Branches

- **main**: Production-ready code. All releases are merged here and tagged with version numbers.
- **dev**: Main development branch where features are integrated for testing before release.

### Supporting Branches

- **feature/\***: Feature branches created from `dev` for new development work.
- **bugfix/\***: Branches for fixing bugs identified in the `dev` branch.
- **hotfix/\***: Branches created from `main` for urgent fixes in production.
- **release/\***: Branches for preparing new releases (version bumps, final fixes).

## Workflow

### Feature Development

1. Create a feature branch from `dev`:
   ```bash
   git checkout dev
   git pull
   git checkout -b feature/feature-name
   ```

2. Work on the feature, committing changes with descriptive commit messages following the Conventional Commits format:
   ```bash
   git commit -m "feat: add user authentication form"
   ```

3. Push the feature branch to remote:
   ```bash
   git push -u origin feature/feature-name
   ```

4. When the feature is complete, create a Pull Request to merge into `dev`.
   - Ensure all CI checks pass
   - Get code review approval
   - Merge using squash and merge or rebase and merge

### Bug Fixes

1. Create a bugfix branch from `dev`:
   ```bash
   git checkout dev
   git pull
   git checkout -b bugfix/bug-description
   ```

2. Fix the bug and commit:
   ```bash
   git commit -m "fix: resolve issue with form submission"
   ```

3. Push the branch and create a Pull Request to `dev`.

### Hotfixes

1. Create a hotfix branch from `main`:
   ```bash
   git checkout main
   git pull
   git checkout -b hotfix/critical-issue
   ```

2. Fix the issue and commit:
   ```bash
   git commit -m "fix: resolve critical data loss issue"
   ```

3. Push the branch and create a Pull Request to both `main` and `dev`.

### Releases

1. Create a release branch from `dev` when ready to prepare a release:
   ```bash
   git checkout dev
   git pull
   git checkout -b release/1.0.0
   ```

2. Make final adjustments, version bumps, and prepare for release.
3. Create a Pull Request to merge into `main`.
4. After merging to `main`, tag the release:
   ```bash
   git checkout main
   git pull
   git tag -a v1.0.0 -m "Release v1.0.0"
   git push origin v1.0.0
   ```
5. Merge the release branch back into `dev`.

## Commit Message Guidelines

Follow the Conventional Commits specification:

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.) that don't affect the meaning of the code
- **refactor**: Code changes that neither fix a bug nor add a feature
- **perf**: Performance improvements
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries

Example:
```
feat(auth): implement JWT authentication

Add JWT token generation and validation for secure API access.
Includes refresh token mechanism and token expiration handling.

Closes #123
```

## Pull Requests

All code changes must go through Pull Requests. No direct commits to `main` or `dev` are allowed.

## Continuous Integration

All branches are subject to CI pipelines that run tests and linting. PRs cannot be merged if CI checks fail. 