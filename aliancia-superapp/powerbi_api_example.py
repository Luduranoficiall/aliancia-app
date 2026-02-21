import requests
import json

# Substitua pelos seus valores
TENANT_ID = 'SEU_TENANT_ID'
CLIENT_ID = 'SEU_CLIENT_ID'
CLIENT_SECRET = 'SEU_CLIENT_SECRET'
GROUP_ID = 'SEU_GROUP_ID'  # Workspace do Power BI
data = {
    'grant_type': 'client_credentials',
    'client_id': CLIENT_ID,
    'client_secret': CLIENT_SECRET,
    'resource': 'https://analysis.windows.net/powerbi/api'
}

token_url = f'https://login.microsoftonline.com/{TENANT_ID}/oauth2/token'
response = requests.post(token_url, data=data)
access_token = response.json().get('access_token')

if not access_token:
    print('Erro ao obter token:', response.text)
    exit(1)

# Exemplo: listar datasets do workspace
headers = {
    'Authorization': f'Bearer {access_token}'
}
url = f'https://api.powerbi.com/v1.0/myorg/groups/{GROUP_ID}/datasets'
resp = requests.get(url, headers=headers)
print('Datasets disponíveis:', json.dumps(resp.json(), indent=2, ensure_ascii=False))

# Para enviar dados, consulte a doc oficial: https://learn.microsoft.com/power-bi/developer/automation/push-datasets-overview
