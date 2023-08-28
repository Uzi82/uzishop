import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    'https://jzzisgfrxzdakahqsjar.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6emlzZ2ZyeHpkYWthaHFzamFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1NTg2NTksImV4cCI6MjAwODEzNDY1OX0.P9aNEPdTv283ZfGMM1211X9oO-2tJwqa9iDmVt4HIeA'
)

export default supabase