# ReqRez
## A simple tool for making HTTP/API requests

### Usage:
node ReqRez <file_name.json>
Where <filename.json> is a JSON file containing the details of the request.
At a minimum, the supplied JSON file must contain:
- The method - GET or POST (more methods coming soon)
- The URL

Optionally, a "body" key can be included which can supply further data, useful for POST requests.

### GET Example
#### request.json file:
{
 'url': 'https://www.some_url.com/api/some_path?api_key=12345678&some_param=some_value'
}

#### Call:
node ReqRez request.json
