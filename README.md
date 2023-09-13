# Website Neuron

This repository contains a microservices architecture project with Laravel serving as the backend API, admin panel and Next.js for the frontend. It's designed to build a maintainable web applications for PT. Neuronworks Indonesia.

## 1.1. Project Structure

The repository is organized as follows:

- `backend/`: Contains the Laravel backend application.
- `frontend/`: Contains the Next.js frontend application.
- `(...rest)`: Add any additional microservices or components you require as subdirectories.

## 1.2. Getting Started

Follow these instructions to get the project up and running on your local machine.

### 1.2.1. Prerequisites

Before you begin, ensure you have the following installed:

- [Composer](https://getcomposer.org/) (for Laravel)
- [Node.js](https://nodejs.org/) (for Next.js)
- [MySQL](https://www.mysql.com/) or another database of your choice.

### 1.2.2. Installation

1. **Clone the repository**:

   ```bash
   git clone https://git.neuron.id/products/website-neuron.git
   cd website-neuron

   ```

2. Set up the Laravel backend:

- Navigate to the backend/ directory.
- Copy the .env.example file to .env and configure your database settings and other environment variables.
- Run the following commands:
  ```bash
  composer install
  php artisan key:generate
  php artisan migrate
  php artisan serve
  ```

3. Set up the Next.js frontend:

- Navigate to the frontend/ directory.
- Install dependencies and start the development server:

  ```bash
  npm install
  npm run dev
  ```

4. Access the Application:

- The Laravel backend should be running at http://localhost:8000.
- The Next.js frontend should be running at http://localhost:3000.

## 1.3. Integrate with your tools

- [ ] [Set up project integrations](https://git.neuron.id/products/website-neuron/-/settings/integrations)

## 1.4. Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## 1.5. Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

## Usage

You can start developing your microservices and frontend components. Customize and extend the project as needed for your specific requirements.

## Acknowledgments

Laravel
Next.js
Feel free to add any additional sections or details as needed for your specific project. Happy coding!
