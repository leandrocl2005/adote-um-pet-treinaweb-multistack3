from django.core.mail import send_mail

def enviar_email_confirmacao(adocao):
  assunto = "Adoção realizada com sucesso"
  conteudo = f"Parabéns por realizar a adocao do pet {adocao.pet.nome}"
  rementente = "djangotester0800@gmail.com"
  destinatario = [adocao.email]
  send_mail(assunto, conteudo, rementente, destinatario)