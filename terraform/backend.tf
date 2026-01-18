terraform {
  backend "s3" {
    bucket         = "kalpesh-terraform-state-bucket"
    key            = "simple-backend/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
