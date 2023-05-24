from django.db import models

    
# Create your models here.
# class student(models.Model):
#     name=models.CharField(max_length=30,null=False)
#     phonenumber=models.CharField(max_length=30,null=False)
#     address=models.CharField(max_length=30,null=False)
#     email=models.CharField(max_length=30,null=False)
#     lvl=models.CharField(max_length=30,null=False)
#     GPA=models.CharField(max_length=30,null=False)
#     s_type=models.CharField(max_length=30,null=False)
#     s_type=models.CharField(max_length=30,null=False)
#     depart=models.CharField(max_length=30,null=True)


class students(models.Model):
    name=models.CharField(max_length=30,null=False)
    phonenumber=models.CharField(max_length=30,null=False)
    address=models.CharField(max_length=30,null=False)
    email=models.CharField(max_length=30,null=False)
    lvl=models.IntegerField(null=False)
    GPA=models.IntegerField(null=False)
    s_type=models.CharField(max_length=30,null=False)
    dob = models.DateField(default='2000-01-01')    
    depart=models.CharField(max_length=30,null=True)
