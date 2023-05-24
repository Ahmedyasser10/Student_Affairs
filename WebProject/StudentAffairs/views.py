from django.template import loader
from django.shortcuts import render
from StudentAffairs.models import students
from django.http import HttpResponse
from datetime import date


def Add(request):
    if request.method == 'POST':
        student_id = request.POST.get('student_id','') 
        name = request.POST.get('name','')
        gpa = request.POST.get('gpa',0)
        email = request.POST.get('email','')
        phone_number = request.POST.get('phone_number','')
        department = request.POST.get('department','')
        level = request.POST.get('level','')
        dob = request.POST.get('dob')
        gender = request.POST.get('gender','')
        address = request.POST.get('address','')
        student = students(id=student_id, name=name, GPA=gpa, email=email,dob=dob, phonenumber=phone_number, depart=department, lvl=level, s_type=gender, address=address)
        student.save() 
    return render(request,'Addstudent.html',{})


def delete(request):
    template = loader.get_template('delete.html')
    return HttpResponse(template.render())

def edit(request):
    if request.method == "POST":
        IDs=request.POST['id']
        updated_student=students.objects.get(id=IDs)
        names=request.POST['name']
        updated_student.name=names
        phones=request.POST['number']
        updated_student.phonenumber=phones
        emails=request.POST['email']
        updated_student.email=emails
        addresse=request.POST['address']
        updated_student.address=addresse
        gpas=request.POST['gpa']
        updated_student.GPA=gpas
        lvls=request.POST['lvl']
        updated_student.lvl=lvls
        updated_student.save()
    return render(request,'editstudent.html',{})

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
    if request.method == "POST":
        IDs=request.POST['id']

        updated_student=students.objects.get(id=IDs)
        names=request.POST['name']
        lvls=request.POST['lvl']
        departs=request.POST['depart']
        updated_student.depart=departs
        updated_student.save()
    return render(request,'NewDepartment.html',{})


def display(request):
    template = loader.get_template('table.html')
    return HttpResponse(template.render())


def signup(request):
    template = loader.get_template('SignUp.html')
    return HttpResponse(template.render())


def home(request):
    template = loader.get_template('home.html')
    return HttpResponse(template.render())


        
