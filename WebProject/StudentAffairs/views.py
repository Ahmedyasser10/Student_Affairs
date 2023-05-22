from django.template import loader
from django.http import HttpResponse
def Add(request):
    
    template = loader.get_template('Addstudent.html')
    return HttpResponse(template.render())

def delete(request):
    template = loader.get_template('delete.html')
    return HttpResponse(template.render())

def edit(request):
    template = loader.get_template('editstudent.html')
    return HttpResponse(template.render())

def login(request):
    template = loader.get_template('login.html')
    return HttpResponse(template.render())


def nav(request):
    template = loader.get_template('navpagev2.html')
    return HttpResponse(template.render())


def user(request):
    template = loader.get_template('user.html')
    return HttpResponse(template.render())


def dep(request):
    template = loader.get_template('NewDepartment.html')
    return HttpResponse(template.render())


def display(request):
    template = loader.get_template('table.html')
    return HttpResponse(template.render())


def signup(request):
    template = loader.get_template('SignUp.html')
    return HttpResponse(template.render())


def home(request):
    template = loader.get_template('home.html')
    return HttpResponse(template.render())

