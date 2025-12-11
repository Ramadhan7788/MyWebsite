
from django.shortcuts import render
from django.http import HttpResponse


def home_view(request):
    context = {
        'title': 'Home',
        'page_title': 'Selamat Datang di MyWebsite',
        'content': 'Ini adalah halaman utama website kami.'
    }
    return render(request, 'pages/home.html', context)

def about_view(request):
    context = {
        'title': 'About',
        'page_title': 'Tentang Kami',
        'content': 'Kami adalah tim yang pengembang yang membangun website ini.',
        'team': ['John Doe', 'Jane Smith', 'Bob Johnson'],
    }
    return render(request, 'pages/about.html', context)

def contact_view(request):
    context = {
        'title': 'Contact',
        'page_title': 'Hubungi Kami',
        'content': 'Silakan hubungi kami melalui form di bawah.',
        'email': 'contact@mywebsite.com',
        'phone': '+62 123 4567 890',
    }
    return render(request, 'pages/contact.html', context)


