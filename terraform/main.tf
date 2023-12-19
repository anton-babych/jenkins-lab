terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.28.0"
    }
  }
}
provider "aws" {
  region = var.region
}

resource "aws_ecr_repository" "repository" {
  name                 = var.repository_name
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}

variable "region" {
  description = "AWS region"
  default     = "us-west-2"
}

variable "repository_name" {
  description = "Name of the ECR repository"
  default     = "my-ecr-repo"
}