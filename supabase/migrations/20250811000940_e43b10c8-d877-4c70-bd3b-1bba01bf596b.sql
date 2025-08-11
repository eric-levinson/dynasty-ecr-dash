-- Create a function to query the dynasty ranks view
CREATE OR REPLACE FUNCTION get_dynasty_ranks()
RETURNS TABLE (
  player text,
  pos text,
  ecr numeric,
  age numeric,
  rdr_team text,
  team_full text,
  years_of_experience numeric
) 
LANGUAGE sql
AS $$
  SELECT 
    vw_dynasty_ranks.player::text,
    vw_dynasty_ranks.pos::text,
    vw_dynasty_ranks.ecr,
    vw_dynasty_ranks.age,
    vw_dynasty_ranks.rdr_team::text,
    vw_dynasty_ranks.team_full::text,
    vw_dynasty_ranks.years_of_experience
  FROM public.vw_dynasty_ranks 
  WHERE ecr_type = 'do' 
  ORDER BY ecr ASC;
$$;