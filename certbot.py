# -*- coding: utf-8 -*-

CERTBOT_HOST = 'http://acme.cygnan.com/cygnan'

import webapp2

class CertbotHandler(webapp2.RequestHandler):
    def get(self):
        CERTBOT_URL = CERTBOT_HOST + self.request.path
        self.redirect(CERTBOT_URL, permanent=True)

app = webapp2.WSGIApplication([
    ('/.*', CertbotHandler)
], debug=False)
