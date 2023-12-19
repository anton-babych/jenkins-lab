terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.28.0"
    }
  }
}
provider "aws" {
  region = var.REGION
}

resource "aws_s3_bucket" "bucket" {
  bucket = var.bucket_name
  acl    = "private"

  versioning {
    enabled = true
  }
}

variable "REGION" {
  description = "AWS region"
  default     = "eu-north-1"
}

variable "bucket_name" {
  description = "Name of the S3 bucket"
  default     = "my-s3-bucket-random-231412413"
}

variable "REPOSITORY_URI" {
  type = string
}
