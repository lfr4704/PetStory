## Live application  

Owners screen connected to API http://pet-story.herokuapp.com/owners/14/feed/

## in construction
```bash
in construciton, backend code does not live in this repository
```

## Getting setup
```bash
git clone git@github.com:ReaderVision/PetMockApi.git
cd PetMockApi/
virtualenv -p python3 venv
source venv/bin/activate
pip install -r requirements.txt
./manage.py migrate
cd frontend
npm install

```

## Running the server
```bash
source venv/bin/activate
./manage.py runserver
```

## Getting setup with windows and cmd (not SSH)
```bash
git clone https://github.com/ReaderVision/PetMockApi.git
cd PetMockApi/
virtualenv env -p {python executable file directory, ex: C:\\Users\\Debbie\\AppData\\Local\\Programs\\Python\\Python36\python.exe}
env\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
cd frontend
npm install

```

## Running the server with windows
```bash
env\Scripts\activate
python manage.py runserver
```


## Running the frontend
```bash
cd frontend
npm run start
```

## Linting
Before you can commit, ```npm run lint``` occurs. If there are lint errors, you can fix some with ```npm run fix-lint```. However, some will need to be resolved manually. To ignore a lint error for a specific line, you can add ```// eslint-disable-line name-of-the-lint-error``` to the end of it. However, this is not advisable without good reason.
