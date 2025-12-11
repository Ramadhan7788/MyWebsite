
from django.test import TestCase
from django.urls import reverse


class PageTests(TestCase):

    def test_home_page_status_code(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    def test_home_page_template(self):
        response = self.client.get(reverse('home'))
        self.assertTemplateUsed(response, 'pages/home.html')

    def test_about_page_status_code(self):
        response = self.client.get('/about/')
        self.assertEqual(response.status_code, 200)

    def test_contact_page_status_code(self):
        response = self.client.get('/contact/')
        self.assertEqual(response.status_code, 200)

    def test_home_page_content(self):
        response = self.client.get('/')
        self.assertContains(response, 'Selamat Datang di MyWebsite')

    def test_about_page_content(self):
        response = self.client.get('/about/')
        self.assertContains(response, 'Tentang Kami')
