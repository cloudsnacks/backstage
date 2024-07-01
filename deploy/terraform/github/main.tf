terraform {
  required_version = ">= 1.7"

  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 6.0"
    }
  }
}

provider "github" {}

# Add a user to the organization
resource "github_membership" "membership_for_user_x" {
  # ...
}