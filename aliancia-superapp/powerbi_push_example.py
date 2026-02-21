import requests
import json

# Substitua pelos seus valores
TENANT_ID = 'SEU_TENANT_ID'
CLIENT_ID = 'SEU_CLIENT_ID'
CLIENT_SECRET = 'SEU_CLIENT_SECRET'
GROUP_ID = 'SEU_GROUP_ID'  # Workspace do Power BI
DATASET_ID = 'SEU_DATASET_ID'  # Dataset destino
TABLE_NAME = 'SEU_TABLE_NAME'  # Nome da tabela destino

def get_access_token():
    data = {
        'grant_type': 'client_credentials',
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'resource': 'https://analysis.windows.net/powerbi/api'
    }
    token_url = f'https://login.microsoftonline.com/{TENANT_ID}/oauth2/token'
    response = requests.post(token_url, data=data)
    response.raise_for_status()
    return response.json().get('access_token')

def push_rows(token, rows):
    url = f'https://api.powerbi.com/v1.0/myorg/groups/{GROUP_ID}/datasets/{DATASET_ID}/tables/{TABLE_NAME}/rows'
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    data = json.dumps({"rows": rows}, ensure_ascii=False)
    resp = requests.post(url, headers=headers, data=data.encode('utf-8'))
    print('Push rows status:', resp.status_code, resp.text)

def refresh_dataset(token):
    url = f'https://api.powerbi.com/v1.0/myorg/groups/{GROUP_ID}/datasets/{DATASET_ID}/refreshes'
    headers = {'Authorization': f'Bearer {token}'}
    resp = requests.post(url, headers=headers)
    print('Refresh status:', resp.status_code, resp.text)

def main():
    token = get_access_token()
    print('Token obtido com sucesso.')

    # Exemplo de push de dados
    rows = [
        {"id": 1, "nome": "Cliente A", "valor": 100.0},
        {"id": 2, "nome": "Cliente B", "valor": 200.0}
    ]
    push_rows(token, rows)

    # Exemplo de refresh do dataset
    refresh_dataset(token)

if __name__ == "__main__":
    main()

# Documentação oficial: https://learn.microsoft.com/power-bi/developer/automation/push-datasets-overview
# Para criar datasets/tabelas: https://learn.microsoft.com/power-bi/developer/automation/push-datasets-create-dataset
