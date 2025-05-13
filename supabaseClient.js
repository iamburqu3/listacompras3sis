// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://agtfhmvtvsghmjknafdd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFndGZobXZ0dnNnaG1qa25hZmRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU2NDUsImV4cCI6MjA2MjExMTY0NX0.IllnE4Tfsv5VeKDmVVFj_8tELJpKmXYTJH7IipapuF0'
) 