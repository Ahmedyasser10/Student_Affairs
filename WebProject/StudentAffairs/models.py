from django.db import models
    
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

class Admin(models.Model):
    NationalId = models.CharField(max_length= 20, primary_key= True)
    FullName = models.CharField(max_length=20)
    UserName = models.CharField(max_length=20)
    Password = models.CharField(max_length=20)
    ConfirmPassword = models.CharField(max_length=20)
    PhoneNumber = models.CharField(max_length=11)
    Date = models.DateField(default='2000-01-01')
    logedIN = models.BooleanField(default=False, null=True)