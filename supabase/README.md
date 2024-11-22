GRANT USAGE
ON SCHEMA api
TO postgres, anon, authenticated, service_role;

ALTER DEFAULT PRIVILEGES IN SCHEMA api
GRANT ALL ON TABLES TO postgres, anon, authenticated, service_role;
