import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * Creates a Supabase client instance
 * @param {string} [supabaseAccessToken] - JWT from Clerk session.getToken()
 * @returns {object} Supabase client
 */
const supabaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
      
        ...(supabaseAccessToken && { Authorization: `Bearer ${supabaseAccessToken}` }),
      },
    },
  });

  return supabase;
};

export default supabaseClient;
