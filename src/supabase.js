import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://vpvpfxxuxgembamdngev.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzUyMjMxMywiZXhwIjoxOTM5MDk4MzEzfQ.Xoh5VVomKwwg_YKZJMNaU7FD80W_TSQfY-2TqUC59_M'
);

export default supabase;
