export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      dynastyprocess_fp_latest_weekly: {
        Row: {
          best: number | null
          ecr: number | null
          fantasypros_id: number | null
          note: number | null
          page: string | null
          page_pos: string | null
          player_bye_week: number | null
          player_ecr_delta: number | null
          player_eligibility: string | null
          player_filename: string | null
          player_name: string
          player_opponent: string | null
          player_opponent_id: string | null
          player_owned_avg: number | null
          player_page_url: string | null
          player_positions: string | null
          player_short_name: string | null
          pos: string
          pos_rank: string | null
          r2p_pts: number | null
          rank: number | null
          recommendation: number | null
          scrape_date: string | null
          sd: number | null
          start_sit_grade: string | null
          tag: number | null
          team: string
          worst: number | null
        }
        Insert: {
          best?: number | null
          ecr?: number | null
          fantasypros_id?: number | null
          note?: number | null
          page?: string | null
          page_pos?: string | null
          player_bye_week?: number | null
          player_ecr_delta?: number | null
          player_eligibility?: string | null
          player_filename?: string | null
          player_name: string
          player_opponent?: string | null
          player_opponent_id?: string | null
          player_owned_avg?: number | null
          player_page_url?: string | null
          player_positions?: string | null
          player_short_name?: string | null
          pos: string
          pos_rank?: string | null
          r2p_pts?: number | null
          rank?: number | null
          recommendation?: number | null
          scrape_date?: string | null
          sd?: number | null
          start_sit_grade?: string | null
          tag?: number | null
          team: string
          worst?: number | null
        }
        Update: {
          best?: number | null
          ecr?: number | null
          fantasypros_id?: number | null
          note?: number | null
          page?: string | null
          page_pos?: string | null
          player_bye_week?: number | null
          player_ecr_delta?: number | null
          player_eligibility?: string | null
          player_filename?: string | null
          player_name?: string
          player_opponent?: string | null
          player_opponent_id?: string | null
          player_owned_avg?: number | null
          player_page_url?: string | null
          player_positions?: string | null
          player_short_name?: string | null
          pos?: string
          pos_rank?: string | null
          r2p_pts?: number | null
          rank?: number | null
          recommendation?: number | null
          scrape_date?: string | null
          sd?: number | null
          start_sit_grade?: string | null
          tag?: number | null
          team?: string
          worst?: number | null
        }
        Relationships: []
      }
      dynastyprocess_fpecr_latest: {
        Row: {
          best: number | null
          bye: number | null
          cbs_id: number | null
          ecr: number | null
          ecr_type: string
          fp_page: string | null
          id: number | null
          mergename: string
          page_type: string
          player: string
          player_filename: string | null
          player_image_url: number | null
          player_owned_avg: number | null
          player_owned_espn: number | null
          player_owned_yahoo: number | null
          player_square_image_url: number | null
          pos: string
          rank_delta: number | null
          scrape_date: string | null
          sd: number
          sportsdata_id: number | null
          team: string | null
          tm: string
          worst: number | null
          yahoo_id: number | null
        }
        Insert: {
          best?: number | null
          bye?: number | null
          cbs_id?: number | null
          ecr?: number | null
          ecr_type: string
          fp_page?: string | null
          id?: number | null
          mergename: string
          page_type: string
          player: string
          player_filename?: string | null
          player_image_url?: number | null
          player_owned_avg?: number | null
          player_owned_espn?: number | null
          player_owned_yahoo?: number | null
          player_square_image_url?: number | null
          pos: string
          rank_delta?: number | null
          scrape_date?: string | null
          sd: number
          sportsdata_id?: number | null
          team?: string | null
          tm: string
          worst?: number | null
          yahoo_id?: number | null
        }
        Update: {
          best?: number | null
          bye?: number | null
          cbs_id?: number | null
          ecr?: number | null
          ecr_type?: string
          fp_page?: string | null
          id?: number | null
          mergename?: string
          page_type?: string
          player?: string
          player_filename?: string | null
          player_image_url?: number | null
          player_owned_avg?: number | null
          player_owned_espn?: number | null
          player_owned_yahoo?: number | null
          player_square_image_url?: number | null
          pos?: string
          rank_delta?: number | null
          scrape_date?: string | null
          sd?: number
          sportsdata_id?: number | null
          team?: string | null
          tm?: string
          worst?: number | null
          yahoo_id?: number | null
        }
        Relationships: []
      }
      dynastyprocess_playerids: {
        Row: {
          age: number | null
          birthdate: string | null
          cbs_id: number | null
          cfbref_id: string | null
          college: string | null
          db_season: number | null
          draft_ovr: number | null
          draft_pick: number | null
          draft_round: number | null
          draft_year: number | null
          espn_id: number | null
          fantasy_data_id: number | null
          fantasypros_id: number | null
          fleaflicker_id: number | null
          gsis_id: string | null
          height: number | null
          ktc_id: number | null
          merge_name: string | null
          mfl_id: number
          name: string
          nfl_id: string | null
          pff_id: number | null
          pfr_id: string | null
          position: string
          rotowire_id: number | null
          rotoworld_id: number | null
          sleeper_id: number | null
          sportradar_id: string | null
          stats_global_id: number | null
          stats_id: number | null
          swish_id: number | null
          team: string
          twitter_username: string | null
          weight: number | null
          yahoo_id: number | null
        }
        Insert: {
          age?: number | null
          birthdate?: string | null
          cbs_id?: number | null
          cfbref_id?: string | null
          college?: string | null
          db_season?: number | null
          draft_ovr?: number | null
          draft_pick?: number | null
          draft_round?: number | null
          draft_year?: number | null
          espn_id?: number | null
          fantasy_data_id?: number | null
          fantasypros_id?: number | null
          fleaflicker_id?: number | null
          gsis_id?: string | null
          height?: number | null
          ktc_id?: number | null
          merge_name?: string | null
          mfl_id: number
          name: string
          nfl_id?: string | null
          pff_id?: number | null
          pfr_id?: string | null
          position: string
          rotowire_id?: number | null
          rotoworld_id?: number | null
          sleeper_id?: number | null
          sportradar_id?: string | null
          stats_global_id?: number | null
          stats_id?: number | null
          swish_id?: number | null
          team: string
          twitter_username?: string | null
          weight?: number | null
          yahoo_id?: number | null
        }
        Update: {
          age?: number | null
          birthdate?: string | null
          cbs_id?: number | null
          cfbref_id?: string | null
          college?: string | null
          db_season?: number | null
          draft_ovr?: number | null
          draft_pick?: number | null
          draft_round?: number | null
          draft_year?: number | null
          espn_id?: number | null
          fantasy_data_id?: number | null
          fantasypros_id?: number | null
          fleaflicker_id?: number | null
          gsis_id?: string | null
          height?: number | null
          ktc_id?: number | null
          merge_name?: string | null
          mfl_id?: number
          name?: string
          nfl_id?: string | null
          pff_id?: number | null
          pfr_id?: string | null
          position?: string
          rotowire_id?: number | null
          rotoworld_id?: number | null
          sleeper_id?: number | null
          sportradar_id?: string | null
          stats_global_id?: number | null
          stats_id?: number | null
          swish_id?: number | null
          team?: string
          twitter_username?: string | null
          weight?: number | null
          yahoo_id?: number | null
        }
        Relationships: []
      }
      dynastyprocess_values: {
        Row: {
          age: number | null
          draft_year: number | null
          ecr_1qb: number | null
          ecr_2qb: number | null
          ecr_pos: number | null
          fp_id: number | null
          player: string
          pos: string
          scrape_date: string | null
          team: string | null
          value_1qb: number | null
          value_2qb: number | null
        }
        Insert: {
          age?: number | null
          draft_year?: number | null
          ecr_1qb?: number | null
          ecr_2qb?: number | null
          ecr_pos?: number | null
          fp_id?: number | null
          player: string
          pos: string
          scrape_date?: string | null
          team?: string | null
          value_1qb?: number | null
          value_2qb?: number | null
        }
        Update: {
          age?: number | null
          draft_year?: number | null
          ecr_1qb?: number | null
          ecr_2qb?: number | null
          ecr_pos?: number | null
          fp_id?: number | null
          player?: string
          pos?: string
          scrape_date?: string | null
          team?: string | null
          value_1qb?: number | null
          value_2qb?: number | null
        }
        Relationships: []
      }
      nfldata_airports: {
        Row: {
          airport: string
          latitude: number | null
          longitude: number | null
          team: string
          time_zone: number | null
        }
        Insert: {
          airport: string
          latitude?: number | null
          longitude?: number | null
          team: string
          time_zone?: number | null
        }
        Update: {
          airport?: string
          latitude?: number | null
          longitude?: number | null
          team?: string
          time_zone?: number | null
        }
        Relationships: []
      }
      nfldata_closing_lines: {
        Row: {
          alt_game_id: string | null
          game_id: number
          line: number | null
          odds: number | null
          outcome: number | null
          side: string
          type: string
        }
        Insert: {
          alt_game_id?: string | null
          game_id: number
          line?: number | null
          odds?: number | null
          outcome?: number | null
          side: string
          type: string
        }
        Update: {
          alt_game_id?: string | null
          game_id?: number
          line?: number | null
          odds?: number | null
          outcome?: number | null
          side?: string
          type?: string
        }
        Relationships: []
      }
      nfldata_draft_picks: {
        Row: {
          category: string | null
          pfr_id: string | null
          pfr_name: string
          pick: number
          player_id: string | null
          position: string | null
          round: number
          season: number
          side: string | null
          team: string
        }
        Insert: {
          category?: string | null
          pfr_id?: string | null
          pfr_name: string
          pick: number
          player_id?: string | null
          position?: string | null
          round: number
          season: number
          side?: string | null
          team: string
        }
        Update: {
          category?: string | null
          pfr_id?: string | null
          pfr_name?: string
          pick?: number
          player_id?: string | null
          position?: string | null
          round?: number
          season?: number
          side?: string | null
          team?: string
        }
        Relationships: []
      }
      nfldata_draft_values: {
        Row: {
          hill: number
          johnson: number
          otc: number | null
          pff: number | null
          pick: number
          stuart: number
        }
        Insert: {
          hill: number
          johnson: number
          otc?: number | null
          pff?: number | null
          pick: number
          stuart: number
        }
        Update: {
          hill?: number
          johnson?: number
          otc?: number | null
          pff?: number | null
          pick?: number
          stuart?: number
        }
        Relationships: []
      }
      nfldata_games: {
        Row: {
          away_coach: string | null
          away_moneyline: number | null
          away_qb_id: string | null
          away_qb_name: string | null
          away_rest: number | null
          away_score: number | null
          away_spread_odds: number | null
          away_team: string
          div_game: number | null
          espn: number | null
          ftn: number | null
          game_id: string | null
          game_type: string | null
          gameday: string | null
          gametime: string | null
          gsis: number | null
          home_coach: string | null
          home_moneyline: number | null
          home_qb_id: string | null
          home_qb_name: string | null
          home_rest: number | null
          home_score: number | null
          home_spread_odds: number | null
          home_team: string
          location: string | null
          nfl_detail_id: string | null
          old_game_id: number | null
          over_odds: number | null
          overtime: number | null
          pff: number | null
          pfr: string | null
          referee: string | null
          result: number | null
          roof: string | null
          season: number
          spread_line: number | null
          stadium: string | null
          stadium_id: string | null
          surface: string | null
          temp: number | null
          total: number | null
          total_line: number | null
          under_odds: number | null
          week: number
          weekday: string | null
          wind: number | null
        }
        Insert: {
          away_coach?: string | null
          away_moneyline?: number | null
          away_qb_id?: string | null
          away_qb_name?: string | null
          away_rest?: number | null
          away_score?: number | null
          away_spread_odds?: number | null
          away_team: string
          div_game?: number | null
          espn?: number | null
          ftn?: number | null
          game_id?: string | null
          game_type?: string | null
          gameday?: string | null
          gametime?: string | null
          gsis?: number | null
          home_coach?: string | null
          home_moneyline?: number | null
          home_qb_id?: string | null
          home_qb_name?: string | null
          home_rest?: number | null
          home_score?: number | null
          home_spread_odds?: number | null
          home_team: string
          location?: string | null
          nfl_detail_id?: string | null
          old_game_id?: number | null
          over_odds?: number | null
          overtime?: number | null
          pff?: number | null
          pfr?: string | null
          referee?: string | null
          result?: number | null
          roof?: string | null
          season: number
          spread_line?: number | null
          stadium?: string | null
          stadium_id?: string | null
          surface?: string | null
          temp?: number | null
          total?: number | null
          total_line?: number | null
          under_odds?: number | null
          week: number
          weekday?: string | null
          wind?: number | null
        }
        Update: {
          away_coach?: string | null
          away_moneyline?: number | null
          away_qb_id?: string | null
          away_qb_name?: string | null
          away_rest?: number | null
          away_score?: number | null
          away_spread_odds?: number | null
          away_team?: string
          div_game?: number | null
          espn?: number | null
          ftn?: number | null
          game_id?: string | null
          game_type?: string | null
          gameday?: string | null
          gametime?: string | null
          gsis?: number | null
          home_coach?: string | null
          home_moneyline?: number | null
          home_qb_id?: string | null
          home_qb_name?: string | null
          home_rest?: number | null
          home_score?: number | null
          home_spread_odds?: number | null
          home_team?: string
          location?: string | null
          nfl_detail_id?: string | null
          old_game_id?: number | null
          over_odds?: number | null
          overtime?: number | null
          pff?: number | null
          pfr?: string | null
          referee?: string | null
          result?: number | null
          roof?: string | null
          season?: number
          spread_line?: number | null
          stadium?: string | null
          stadium_id?: string | null
          surface?: string | null
          temp?: number | null
          total?: number | null
          total_line?: number | null
          under_odds?: number | null
          week?: number
          weekday?: string | null
          wind?: number | null
        }
        Relationships: []
      }
      nfldata_initial_lines: {
        Row: {
          about: string
          line: number | null
          season: number
          side: string
          sportsbook: string
          type: string | null
        }
        Insert: {
          about: string
          line?: number | null
          season: number
          side: string
          sportsbook: string
          type?: string | null
        }
        Update: {
          about?: string
          line?: number | null
          season?: number
          side?: string
          sportsbook?: string
          type?: string | null
        }
        Relationships: []
      }
      nfldata_logos: {
        Row: {
          team: string
          team_logo: string
        }
        Insert: {
          team: string
          team_logo: string
        }
        Update: {
          team?: string
          team_logo?: string
        }
        Relationships: []
      }
      nfldata_officials: {
        Row: {
          game_id: string
          name: string
          off_pos: string | null
          official_id: string | null
        }
        Insert: {
          game_id: string
          name: string
          off_pos?: string | null
          official_id?: string | null
        }
        Update: {
          game_id?: string
          name?: string
          off_pos?: string | null
          official_id?: string | null
        }
        Relationships: []
      }
      nfldata_pff_pfr_map_v1: {
        Row: {
          pff_id: number
          pff_name: string
          pff_url_name: string | null
          pfr_id: string | null
        }
        Insert: {
          pff_id: number
          pff_name: string
          pff_url_name?: string | null
          pfr_id?: string | null
        }
        Update: {
          pff_id?: number
          pff_name?: string
          pff_url_name?: string | null
          pfr_id?: string | null
        }
        Relationships: []
      }
      nfldata_positions: {
        Row: {
          category: string
          label: string | null
          position: string
          side: string
        }
        Insert: {
          category: string
          label?: string | null
          position: string
          side: string
        }
        Update: {
          category?: string
          label?: string | null
          position?: string
          side?: string
        }
        Relationships: []
      }
      nfldata_predictions: {
        Row: {
          game_id: string
          prediction: number
          screen_name: string
        }
        Insert: {
          game_id: string
          prediction: number
          screen_name: string
        }
        Update: {
          game_id?: string
          prediction?: number
          screen_name?: string
        }
        Relationships: []
      }
      nfldata_rosters: {
        Row: {
          av: number | null
          category: string | null
          full_name: string | null
          games: number | null
          name: string | null
          playerid: string
          position: string | null
          season: number
          side: string | null
          starts: number | null
          team: string
          years: number | null
        }
        Insert: {
          av?: number | null
          category?: string | null
          full_name?: string | null
          games?: number | null
          name?: string | null
          playerid: string
          position?: string | null
          season: number
          side?: string | null
          starts?: number | null
          team: string
          years?: number | null
        }
        Update: {
          av?: number | null
          category?: string | null
          full_name?: string | null
          games?: number | null
          name?: string | null
          playerid?: string
          position?: string | null
          season?: number
          side?: string | null
          starts?: number | null
          team?: string
          years?: number | null
        }
        Relationships: []
      }
      nfldata_sc_lines: {
        Row: {
          away_team: string
          game_id: number
          home_team: string
          line: number | null
          season: number
          side: string
          week: number
        }
        Insert: {
          away_team: string
          game_id: number
          home_team: string
          line?: number | null
          season: number
          side: string
          week: number
        }
        Update: {
          away_team?: string
          game_id?: number
          home_team?: string
          line?: number | null
          season?: number
          side?: string
          week?: number
        }
        Relationships: []
      }
      nfldata_seasonal_analytics: {
        Row: {
          air_yards_share: number | null
          attempts: number | null
          ay_sh: number | null
          carries: number | null
          completions: number | null
          dakota: number | null
          dom: number | null
          fantasy_points: number | null
          fantasy_points_ppr: number | null
          games: number | null
          interceptions: number | null
          pacr: number | null
          passing_2pt_conversions: number | null
          passing_air_yards: number | null
          passing_epa: number | null
          passing_first_downs: number | null
          passing_tds: number | null
          passing_yards: number | null
          passing_yards_after_catch: number | null
          player_id: string
          ppr_sh: number | null
          racr: number | null
          receiving_2pt_conversions: number | null
          receiving_air_yards: number | null
          receiving_epa: number | null
          receiving_first_downs: number | null
          receiving_fumbles: number | null
          receiving_fumbles_lost: number | null
          receiving_tds: number | null
          receiving_yards: number | null
          receiving_yards_after_catch: number | null
          receptions: number | null
          rfd_sh: number | null
          rtd_sh: number | null
          rtdfd_sh: number | null
          rushing_2pt_conversions: number | null
          rushing_epa: number | null
          rushing_first_downs: number | null
          rushing_fumbles: number | null
          rushing_fumbles_lost: number | null
          rushing_tds: number | null
          rushing_yards: number | null
          ry_sh: number | null
          sack_fumbles: number | null
          sack_fumbles_lost: number | null
          sack_yards: number | null
          sacks: number | null
          season: number
          season_type: string
          special_teams_tds: number | null
          target_share: number | null
          targets: number | null
          tgt_sh: number | null
          w8dom: number | null
          wopr_x: number | null
          wopr_y: number | null
          yac_sh: number | null
          yptmpa: number | null
        }
        Insert: {
          air_yards_share?: number | null
          attempts?: number | null
          ay_sh?: number | null
          carries?: number | null
          completions?: number | null
          dakota?: number | null
          dom?: number | null
          fantasy_points?: number | null
          fantasy_points_ppr?: number | null
          games?: number | null
          interceptions?: number | null
          pacr?: number | null
          passing_2pt_conversions?: number | null
          passing_air_yards?: number | null
          passing_epa?: number | null
          passing_first_downs?: number | null
          passing_tds?: number | null
          passing_yards?: number | null
          passing_yards_after_catch?: number | null
          player_id: string
          ppr_sh?: number | null
          racr?: number | null
          receiving_2pt_conversions?: number | null
          receiving_air_yards?: number | null
          receiving_epa?: number | null
          receiving_first_downs?: number | null
          receiving_fumbles?: number | null
          receiving_fumbles_lost?: number | null
          receiving_tds?: number | null
          receiving_yards?: number | null
          receiving_yards_after_catch?: number | null
          receptions?: number | null
          rfd_sh?: number | null
          rtd_sh?: number | null
          rtdfd_sh?: number | null
          rushing_2pt_conversions?: number | null
          rushing_epa?: number | null
          rushing_first_downs?: number | null
          rushing_fumbles?: number | null
          rushing_fumbles_lost?: number | null
          rushing_tds?: number | null
          rushing_yards?: number | null
          ry_sh?: number | null
          sack_fumbles?: number | null
          sack_fumbles_lost?: number | null
          sack_yards?: number | null
          sacks?: number | null
          season: number
          season_type: string
          special_teams_tds?: number | null
          target_share?: number | null
          targets?: number | null
          tgt_sh?: number | null
          w8dom?: number | null
          wopr_x?: number | null
          wopr_y?: number | null
          yac_sh?: number | null
          yptmpa?: number | null
        }
        Update: {
          air_yards_share?: number | null
          attempts?: number | null
          ay_sh?: number | null
          carries?: number | null
          completions?: number | null
          dakota?: number | null
          dom?: number | null
          fantasy_points?: number | null
          fantasy_points_ppr?: number | null
          games?: number | null
          interceptions?: number | null
          pacr?: number | null
          passing_2pt_conversions?: number | null
          passing_air_yards?: number | null
          passing_epa?: number | null
          passing_first_downs?: number | null
          passing_tds?: number | null
          passing_yards?: number | null
          passing_yards_after_catch?: number | null
          player_id?: string
          ppr_sh?: number | null
          racr?: number | null
          receiving_2pt_conversions?: number | null
          receiving_air_yards?: number | null
          receiving_epa?: number | null
          receiving_first_downs?: number | null
          receiving_fumbles?: number | null
          receiving_fumbles_lost?: number | null
          receiving_tds?: number | null
          receiving_yards?: number | null
          receiving_yards_after_catch?: number | null
          receptions?: number | null
          rfd_sh?: number | null
          rtd_sh?: number | null
          rtdfd_sh?: number | null
          rushing_2pt_conversions?: number | null
          rushing_epa?: number | null
          rushing_first_downs?: number | null
          rushing_fumbles?: number | null
          rushing_fumbles_lost?: number | null
          rushing_tds?: number | null
          rushing_yards?: number | null
          ry_sh?: number | null
          sack_fumbles?: number | null
          sack_fumbles_lost?: number | null
          sack_yards?: number | null
          sacks?: number | null
          season?: number
          season_type?: string
          special_teams_tds?: number | null
          target_share?: number | null
          targets?: number | null
          tgt_sh?: number | null
          w8dom?: number | null
          wopr_x?: number | null
          wopr_y?: number | null
          yac_sh?: number | null
          yptmpa?: number | null
        }
        Relationships: []
      }
      nfldata_standings: {
        Row: {
          allowed: number | null
          conf: string | null
          div_rank: number | null
          division: string | null
          losses: number | null
          net: number | null
          pct: number | null
          playoff: string | null
          scored: number | null
          season: number
          seed: number | null
          sos: number | null
          sov: number | null
          team: string
          ties: number | null
          wins: number | null
        }
        Insert: {
          allowed?: number | null
          conf?: string | null
          div_rank?: number | null
          division?: string | null
          losses?: number | null
          net?: number | null
          pct?: number | null
          playoff?: string | null
          scored?: number | null
          season: number
          seed?: number | null
          sos?: number | null
          sov?: number | null
          team: string
          ties?: number | null
          wins?: number | null
        }
        Update: {
          allowed?: number | null
          conf?: string | null
          div_rank?: number | null
          division?: string | null
          losses?: number | null
          net?: number | null
          pct?: number | null
          playoff?: string | null
          scored?: number | null
          season?: number
          seed?: number | null
          sos?: number | null
          sov?: number | null
          team?: string
          ties?: number | null
          wins?: number | null
        }
        Relationships: []
      }
      nfldata_teamcolors: {
        Row: {
          color: string | null
          color2: string | null
          color3: string | null
          color4: string | null
          team: string
        }
        Insert: {
          color?: string | null
          color2?: string | null
          color3?: string | null
          color4?: string | null
          team: string
        }
        Update: {
          color?: string | null
          color2?: string | null
          color3?: string | null
          color4?: string | null
          team?: string
        }
        Relationships: []
      }
      nfldata_teams: {
        Row: {
          draft_kings: string | null
          espn: string | null
          fo: string | null
          full: string | null
          hyphenated: string | null
          location: string | null
          nfl: string | null
          nfl_team_id: number | null
          nickname: string | null
          pff: number | null
          pfflabel: string | null
          pfr: string | null
          sbr: number | null
          sbr_name: string | null
          sbr_wins: number | null
          season: number
          short_location: string | null
          team: string
        }
        Insert: {
          draft_kings?: string | null
          espn?: string | null
          fo?: string | null
          full?: string | null
          hyphenated?: string | null
          location?: string | null
          nfl?: string | null
          nfl_team_id?: number | null
          nickname?: string | null
          pff?: number | null
          pfflabel?: string | null
          pfr?: string | null
          sbr?: number | null
          sbr_name?: string | null
          sbr_wins?: number | null
          season: number
          short_location?: string | null
          team: string
        }
        Update: {
          draft_kings?: string | null
          espn?: string | null
          fo?: string | null
          full?: string | null
          hyphenated?: string | null
          location?: string | null
          nfl?: string | null
          nfl_team_id?: number | null
          nickname?: string | null
          pff?: number | null
          pfflabel?: string | null
          pfr?: string | null
          sbr?: number | null
          sbr_name?: string | null
          sbr_wins?: number | null
          season?: number
          short_location?: string | null
          team?: string
        }
        Relationships: []
      }
      nfldata_trades: {
        Row: {
          conditional: number
          gave: string
          pfr_id: string
          pfr_name: string
          pick_number: number
          pick_round: number
          pick_season: number
          received: string
          season: number
          trade_date: string
          trade_id: number
        }
        Insert: {
          conditional?: number
          gave: string
          pfr_id?: string
          pfr_name?: string
          pick_number?: number
          pick_round?: number
          pick_season?: number
          received: string
          season: number
          trade_date: string
          trade_id: number
        }
        Update: {
          conditional?: number
          gave?: string
          pfr_id?: string
          pfr_name?: string
          pick_number?: number
          pick_round?: number
          pick_season?: number
          received?: string
          season?: number
          trade_date?: string
          trade_id?: number
        }
        Relationships: []
      }
      nfldata_win_totals: {
        Row: {
          line: number
          over_odds: number
          season: number
          team: string
          under_odds: number
        }
        Insert: {
          line: number
          over_odds: number
          season: number
          team: string
          under_odds: number
        }
        Update: {
          line?: number
          over_odds?: number
          season?: number
          team?: string
          under_odds?: number
        }
        Relationships: []
      }
      nflreadr_clean_player_names: {
        Row: {
          alt_name: string | null
          correct_name: string
        }
        Insert: {
          alt_name?: string | null
          correct_name: string
        }
        Update: {
          alt_name?: string | null
          correct_name?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_combine: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_contracts: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_depth_charts: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_draft_picks: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_espn_qbr: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_ff_playerids: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_ff_rankings: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_ffopps: {
        Row: {
          Dataframe: string
          Description: string
          Field: string
          Type: string
        }
        Insert: {
          Dataframe: string
          Description: string
          Field: string
          Type: string
        }
        Update: {
          Dataframe?: string
          Description?: string
          Field?: string
          Type?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_ftn_charting: {
        Row: {
          description: string | null
          field_name: string
          field_type: string | null
          ftn_field_name: string | null
          order: number | null
        }
        Insert: {
          description?: string | null
          field_name: string
          field_type?: string | null
          ftn_field_name?: string | null
          order?: number | null
        }
        Update: {
          description?: string | null
          field_name?: string
          field_type?: string | null
          ftn_field_name?: string | null
          order?: number | null
        }
        Relationships: []
      }
      nflreadr_dictionary_injuries: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_nextgenstats: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_participation: {
        Row: {
          Description: string | null
          Field: string
          Type: string | null
        }
        Insert: {
          Description?: string | null
          Field: string
          Type?: string | null
        }
        Update: {
          Description?: string | null
          Field?: string
          Type?: string | null
        }
        Relationships: []
      }
      nflreadr_dictionary_pbp: {
        Row: {
          Description: string | null
          Field: string
          Type: string | null
        }
        Insert: {
          Description?: string | null
          Field: string
          Type?: string | null
        }
        Update: {
          Description?: string | null
          Field?: string
          Type?: string | null
        }
        Relationships: []
      }
      nflreadr_dictionary_pfr_passing: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_players: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_playerstats: {
        Row: {
          Description: string | null
          Field: string
        }
        Insert: {
          Description?: string | null
          Field: string
        }
        Update: {
          Description?: string | null
          Field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_playerstats_def: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_roster_status: {
        Row: {
          description: string
          status: string
        }
        Insert: {
          description: string
          status: string
        }
        Update: {
          description?: string
          status?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_rosters: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_schedules: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_snap_counts: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_dictionary_trades: {
        Row: {
          data_type: string | null
          description: string | null
          field: string
        }
        Insert: {
          data_type?: string | null
          description?: string | null
          field: string
        }
        Update: {
          data_type?: string | null
          description?: string | null
          field?: string
        }
        Relationships: []
      }
      nflreadr_nfl_advstats_def_season: {
        Row: {
          age: number | null
          air: number | null
          bltz: number | null
          cmp: number | null
          cmp_percent: number | null
          comb: number | null
          dadot: number | null
          g: number | null
          gs: number | null
          hrry: number | null
          int: number | null
          loaded: string | null
          m_tkl: number | null
          m_tkl_percent: number | null
          pfr_id: string
          player: string
          pos: string | null
          prss: number | null
          qbkd: number | null
          rat: number | null
          season: number
          sk: number | null
          td: number | null
          tgt: number | null
          tm: string
          yac: number | null
          yds: number | null
          yds_cmp: number | null
          yds_tgt: number | null
        }
        Insert: {
          age?: number | null
          air?: number | null
          bltz?: number | null
          cmp?: number | null
          cmp_percent?: number | null
          comb?: number | null
          dadot?: number | null
          g?: number | null
          gs?: number | null
          hrry?: number | null
          int?: number | null
          loaded?: string | null
          m_tkl?: number | null
          m_tkl_percent?: number | null
          pfr_id: string
          player: string
          pos?: string | null
          prss?: number | null
          qbkd?: number | null
          rat?: number | null
          season: number
          sk?: number | null
          td?: number | null
          tgt?: number | null
          tm: string
          yac?: number | null
          yds?: number | null
          yds_cmp?: number | null
          yds_tgt?: number | null
        }
        Update: {
          age?: number | null
          air?: number | null
          bltz?: number | null
          cmp?: number | null
          cmp_percent?: number | null
          comb?: number | null
          dadot?: number | null
          g?: number | null
          gs?: number | null
          hrry?: number | null
          int?: number | null
          loaded?: string | null
          m_tkl?: number | null
          m_tkl_percent?: number | null
          pfr_id?: string
          player?: string
          pos?: string | null
          prss?: number | null
          qbkd?: number | null
          rat?: number | null
          season?: number
          sk?: number | null
          td?: number | null
          tgt?: number | null
          tm?: string
          yac?: number | null
          yds?: number | null
          yds_cmp?: number | null
          yds_tgt?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_advstats_def_week: {
        Row: {
          def_adot: number | null
          def_air_yards_completed: number | null
          def_completion_pct: number | null
          def_completions_allowed: number | null
          def_ints: number | null
          def_missed_tackle_pct: number | null
          def_missed_tackles: number | null
          def_passer_rating_allowed: number | null
          def_pressures: number | null
          def_receiving_td_allowed: number | null
          def_sacks: number | null
          def_tackles_combined: number | null
          def_targets: number | null
          def_times_blitzed: number | null
          def_times_hitqb: number | null
          def_times_hurried: number | null
          def_yards_after_catch: number | null
          def_yards_allowed: number | null
          def_yards_allowed_per_cmp: number | null
          def_yards_allowed_per_tgt: number | null
          game_id: string | null
          game_type: string | null
          opponent: string | null
          pfr_game_id: string | null
          pfr_player_id: string
          pfr_player_name: string
          season: number
          team: string
          week: number
        }
        Insert: {
          def_adot?: number | null
          def_air_yards_completed?: number | null
          def_completion_pct?: number | null
          def_completions_allowed?: number | null
          def_ints?: number | null
          def_missed_tackle_pct?: number | null
          def_missed_tackles?: number | null
          def_passer_rating_allowed?: number | null
          def_pressures?: number | null
          def_receiving_td_allowed?: number | null
          def_sacks?: number | null
          def_tackles_combined?: number | null
          def_targets?: number | null
          def_times_blitzed?: number | null
          def_times_hitqb?: number | null
          def_times_hurried?: number | null
          def_yards_after_catch?: number | null
          def_yards_allowed?: number | null
          def_yards_allowed_per_cmp?: number | null
          def_yards_allowed_per_tgt?: number | null
          game_id?: string | null
          game_type?: string | null
          opponent?: string | null
          pfr_game_id?: string | null
          pfr_player_id: string
          pfr_player_name: string
          season: number
          team: string
          week: number
        }
        Update: {
          def_adot?: number | null
          def_air_yards_completed?: number | null
          def_completion_pct?: number | null
          def_completions_allowed?: number | null
          def_ints?: number | null
          def_missed_tackle_pct?: number | null
          def_missed_tackles?: number | null
          def_passer_rating_allowed?: number | null
          def_pressures?: number | null
          def_receiving_td_allowed?: number | null
          def_sacks?: number | null
          def_tackles_combined?: number | null
          def_targets?: number | null
          def_times_blitzed?: number | null
          def_times_hitqb?: number | null
          def_times_hurried?: number | null
          def_yards_after_catch?: number | null
          def_yards_allowed?: number | null
          def_yards_allowed_per_cmp?: number | null
          def_yards_allowed_per_tgt?: number | null
          game_id?: string | null
          game_type?: string | null
          opponent?: string | null
          pfr_game_id?: string | null
          pfr_player_id?: string
          pfr_player_name?: string
          season?: number
          team?: string
          week?: number
        }
        Relationships: []
      }
      nflreadr_nfl_advstats_pass_season: {
        Row: {
          bad_throw_pct: number | null
          bad_throws: number | null
          batted_balls: number | null
          drop_pct: number | null
          drops: number | null
          on_tgt_pct: number | null
          on_tgt_throws: number | null
          pa_pass_att: number | null
          pa_pass_yards: number | null
          pass_attempts: number | null
          pfr_id: string
          player: string
          pocket_time: number | null
          pressure_pct: number | null
          rpo_pass_att: number | null
          rpo_pass_yards: number | null
          rpo_plays: number | null
          rpo_rush_att: number | null
          rpo_rush_yards: number | null
          rpo_yards: number | null
          season: number
          spikes: number | null
          team: string
          throwaways: number | null
          times_blitzed: number | null
          times_hit: number | null
          times_hurried: number | null
          times_pressured: number | null
        }
        Insert: {
          bad_throw_pct?: number | null
          bad_throws?: number | null
          batted_balls?: number | null
          drop_pct?: number | null
          drops?: number | null
          on_tgt_pct?: number | null
          on_tgt_throws?: number | null
          pa_pass_att?: number | null
          pa_pass_yards?: number | null
          pass_attempts?: number | null
          pfr_id: string
          player: string
          pocket_time?: number | null
          pressure_pct?: number | null
          rpo_pass_att?: number | null
          rpo_pass_yards?: number | null
          rpo_plays?: number | null
          rpo_rush_att?: number | null
          rpo_rush_yards?: number | null
          rpo_yards?: number | null
          season: number
          spikes?: number | null
          team: string
          throwaways?: number | null
          times_blitzed?: number | null
          times_hit?: number | null
          times_hurried?: number | null
          times_pressured?: number | null
        }
        Update: {
          bad_throw_pct?: number | null
          bad_throws?: number | null
          batted_balls?: number | null
          drop_pct?: number | null
          drops?: number | null
          on_tgt_pct?: number | null
          on_tgt_throws?: number | null
          pa_pass_att?: number | null
          pa_pass_yards?: number | null
          pass_attempts?: number | null
          pfr_id?: string
          player?: string
          pocket_time?: number | null
          pressure_pct?: number | null
          rpo_pass_att?: number | null
          rpo_pass_yards?: number | null
          rpo_plays?: number | null
          rpo_rush_att?: number | null
          rpo_rush_yards?: number | null
          rpo_yards?: number | null
          season?: number
          spikes?: number | null
          team?: string
          throwaways?: number | null
          times_blitzed?: number | null
          times_hit?: number | null
          times_hurried?: number | null
          times_pressured?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_advstats_pass_week: {
        Row: {
          def_times_blitzed: number | null
          def_times_hitqb: number | null
          def_times_hurried: number | null
          game_id: string
          game_type: string | null
          opponent: string | null
          passing_bad_throw_pct: number | null
          passing_bad_throws: number | null
          passing_drop_pct: number | null
          passing_drops: number | null
          pfr_game_id: string | null
          pfr_player_id: string | null
          pfr_player_name: string
          receiving_drop: number | null
          receiving_drop_pct: number | null
          season: number
          team: string
          times_blitzed: number | null
          times_hit: number | null
          times_hurried: number | null
          times_pressured: number | null
          times_pressured_pct: number | null
          times_sacked: number | null
          week: number
        }
        Insert: {
          def_times_blitzed?: number | null
          def_times_hitqb?: number | null
          def_times_hurried?: number | null
          game_id: string
          game_type?: string | null
          opponent?: string | null
          passing_bad_throw_pct?: number | null
          passing_bad_throws?: number | null
          passing_drop_pct?: number | null
          passing_drops?: number | null
          pfr_game_id?: string | null
          pfr_player_id?: string | null
          pfr_player_name: string
          receiving_drop?: number | null
          receiving_drop_pct?: number | null
          season: number
          team: string
          times_blitzed?: number | null
          times_hit?: number | null
          times_hurried?: number | null
          times_pressured?: number | null
          times_pressured_pct?: number | null
          times_sacked?: number | null
          week: number
        }
        Update: {
          def_times_blitzed?: number | null
          def_times_hitqb?: number | null
          def_times_hurried?: number | null
          game_id?: string
          game_type?: string | null
          opponent?: string | null
          passing_bad_throw_pct?: number | null
          passing_bad_throws?: number | null
          passing_drop_pct?: number | null
          passing_drops?: number | null
          pfr_game_id?: string | null
          pfr_player_id?: string | null
          pfr_player_name?: string
          receiving_drop?: number | null
          receiving_drop_pct?: number | null
          season?: number
          team?: string
          times_blitzed?: number | null
          times_hit?: number | null
          times_hurried?: number | null
          times_pressured?: number | null
          times_pressured_pct?: number | null
          times_sacked?: number | null
          week?: number
        }
        Relationships: []
      }
      nflreadr_nfl_advstats_rec_season: {
        Row: {
          adot: number | null
          age: number
          brk_tkl: number | null
          drop: number | null
          drop_percent: number | null
          g: number | null
          gs: number | null
          int: number | null
          loaded: string | null
          pfr_id: string | null
          player: string
          pos: string | null
          rat: number | null
          rec: number | null
          rec_br: number | null
          season: number
          td: number | null
          tgt: number | null
          tm: string
          x1d: number | null
          yac: number | null
          yac_r: number | null
          ybc: number | null
          ybc_r: number | null
          yds: number | null
        }
        Insert: {
          adot?: number | null
          age: number
          brk_tkl?: number | null
          drop?: number | null
          drop_percent?: number | null
          g?: number | null
          gs?: number | null
          int?: number | null
          loaded?: string | null
          pfr_id?: string | null
          player: string
          pos?: string | null
          rat?: number | null
          rec?: number | null
          rec_br?: number | null
          season: number
          td?: number | null
          tgt?: number | null
          tm: string
          x1d?: number | null
          yac?: number | null
          yac_r?: number | null
          ybc?: number | null
          ybc_r?: number | null
          yds?: number | null
        }
        Update: {
          adot?: number | null
          age?: number
          brk_tkl?: number | null
          drop?: number | null
          drop_percent?: number | null
          g?: number | null
          gs?: number | null
          int?: number | null
          loaded?: string | null
          pfr_id?: string | null
          player?: string
          pos?: string | null
          rat?: number | null
          rec?: number | null
          rec_br?: number | null
          season?: number
          td?: number | null
          tgt?: number | null
          tm?: string
          x1d?: number | null
          yac?: number | null
          yac_r?: number | null
          ybc?: number | null
          ybc_r?: number | null
          yds?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_advstats_rec_week: {
        Row: {
          game_id: string | null
          game_type: string | null
          opponent: string | null
          passing_drop_pct: number | null
          passing_drops: number | null
          pfr_game_id: string | null
          pfr_player_id: string | null
          pfr_player_name: string
          receiving_broken_tackles: number | null
          receiving_drop: number | null
          receiving_drop_pct: number | null
          receiving_int: number | null
          receiving_rat: number | null
          rushing_broken_tackles: number | null
          season: number
          team: string
          week: number
        }
        Insert: {
          game_id?: string | null
          game_type?: string | null
          opponent?: string | null
          passing_drop_pct?: number | null
          passing_drops?: number | null
          pfr_game_id?: string | null
          pfr_player_id?: string | null
          pfr_player_name: string
          receiving_broken_tackles?: number | null
          receiving_drop?: number | null
          receiving_drop_pct?: number | null
          receiving_int?: number | null
          receiving_rat?: number | null
          rushing_broken_tackles?: number | null
          season: number
          team: string
          week: number
        }
        Update: {
          game_id?: string | null
          game_type?: string | null
          opponent?: string | null
          passing_drop_pct?: number | null
          passing_drops?: number | null
          pfr_game_id?: string | null
          pfr_player_id?: string | null
          pfr_player_name?: string
          receiving_broken_tackles?: number | null
          receiving_drop?: number | null
          receiving_drop_pct?: number | null
          receiving_int?: number | null
          receiving_rat?: number | null
          rushing_broken_tackles?: number | null
          season?: number
          team?: string
          week?: number
        }
        Relationships: []
      }
      nflreadr_nfl_advstats_rush_season: {
        Row: {
          age: number | null
          att: number | null
          att_br: number | null
          brk_tkl: number | null
          g: number | null
          gs: number | null
          loaded: string | null
          pfr_id: string
          player: string
          pos: string | null
          season: number
          td: number | null
          tm: string
          x1d: number | null
          yac: number | null
          yac_att: number | null
          ybc: number | null
          ybc_att: number | null
          yds: number | null
        }
        Insert: {
          age?: number | null
          att?: number | null
          att_br?: number | null
          brk_tkl?: number | null
          g?: number | null
          gs?: number | null
          loaded?: string | null
          pfr_id: string
          player: string
          pos?: string | null
          season: number
          td?: number | null
          tm: string
          x1d?: number | null
          yac?: number | null
          yac_att?: number | null
          ybc?: number | null
          ybc_att?: number | null
          yds?: number | null
        }
        Update: {
          age?: number | null
          att?: number | null
          att_br?: number | null
          brk_tkl?: number | null
          g?: number | null
          gs?: number | null
          loaded?: string | null
          pfr_id?: string
          player?: string
          pos?: string | null
          season?: number
          td?: number | null
          tm?: string
          x1d?: number | null
          yac?: number | null
          yac_att?: number | null
          ybc?: number | null
          ybc_att?: number | null
          yds?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_advstats_rush_week: {
        Row: {
          carries: number | null
          game_id: string | null
          game_type: string | null
          opponent: string | null
          pfr_game_id: string | null
          pfr_player_id: string | null
          pfr_player_name: string
          receiving_broken_tackles: number | null
          rushing_broken_tackles: number | null
          rushing_yards_after_contact: number | null
          rushing_yards_after_contact_avg: number | null
          rushing_yards_before_contact: number | null
          rushing_yards_before_contact_avg: number | null
          season: number
          team: string
          week: number
        }
        Insert: {
          carries?: number | null
          game_id?: string | null
          game_type?: string | null
          opponent?: string | null
          pfr_game_id?: string | null
          pfr_player_id?: string | null
          pfr_player_name: string
          receiving_broken_tackles?: number | null
          rushing_broken_tackles?: number | null
          rushing_yards_after_contact?: number | null
          rushing_yards_after_contact_avg?: number | null
          rushing_yards_before_contact?: number | null
          rushing_yards_before_contact_avg?: number | null
          season: number
          team: string
          week: number
        }
        Update: {
          carries?: number | null
          game_id?: string | null
          game_type?: string | null
          opponent?: string | null
          pfr_game_id?: string | null
          pfr_player_id?: string | null
          pfr_player_name?: string
          receiving_broken_tackles?: number | null
          rushing_broken_tackles?: number | null
          rushing_yards_after_contact?: number | null
          rushing_yards_after_contact_avg?: number | null
          rushing_yards_before_contact?: number | null
          rushing_yards_before_contact_avg?: number | null
          season?: number
          team?: string
          week?: number
        }
        Relationships: []
      }
      nflreadr_nfl_combine: {
        Row: {
          bench: number | null
          broad_jump: number | null
          cfb_id: string | null
          cone: number | null
          draft_ovr: number | null
          draft_round: number | null
          draft_team: string | null
          draft_year: number | null
          forty: number | null
          ht: string | null
          pfr_id: string | null
          player_name: string
          pos: string
          school: string | null
          season: number
          shuttle: number | null
          vertical: number | null
          wt: number | null
        }
        Insert: {
          bench?: number | null
          broad_jump?: number | null
          cfb_id?: string | null
          cone?: number | null
          draft_ovr?: number | null
          draft_round?: number | null
          draft_team?: string | null
          draft_year?: number | null
          forty?: number | null
          ht?: string | null
          pfr_id?: string | null
          player_name: string
          pos: string
          school?: string | null
          season: number
          shuttle?: number | null
          vertical?: number | null
          wt?: number | null
        }
        Update: {
          bench?: number | null
          broad_jump?: number | null
          cfb_id?: string | null
          cone?: number | null
          draft_ovr?: number | null
          draft_round?: number | null
          draft_team?: string | null
          draft_year?: number | null
          forty?: number | null
          ht?: string | null
          pfr_id?: string | null
          player_name?: string
          pos?: string
          school?: string | null
          season?: number
          shuttle?: number | null
          vertical?: number | null
          wt?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_contracts: {
        Row: {
          apy: number | null
          apy_cap_pct: number | null
          college: string | null
          cols: string | null
          date_of_birth: string | null
          draft_overall: number | null
          draft_round: number | null
          draft_team: string | null
          draft_year: number | null
          gsis_id: string | null
          guaranteed: number | null
          height: string | null
          inflated_apy: number | null
          inflated_guaranteed: number | null
          inflated_value: number | null
          is_active: boolean | null
          otc_id: string | null
          player: string
          player_page: string | null
          position: string
          team: string
          value: number | null
          weight: string | null
          year_signed: string | null
          years: number | null
        }
        Insert: {
          apy?: number | null
          apy_cap_pct?: number | null
          college?: string | null
          cols?: string | null
          date_of_birth?: string | null
          draft_overall?: number | null
          draft_round?: number | null
          draft_team?: string | null
          draft_year?: number | null
          gsis_id?: string | null
          guaranteed?: number | null
          height?: string | null
          inflated_apy?: number | null
          inflated_guaranteed?: number | null
          inflated_value?: number | null
          is_active?: boolean | null
          otc_id?: string | null
          player: string
          player_page?: string | null
          position: string
          team: string
          value?: number | null
          weight?: string | null
          year_signed?: string | null
          years?: number | null
        }
        Update: {
          apy?: number | null
          apy_cap_pct?: number | null
          college?: string | null
          cols?: string | null
          date_of_birth?: string | null
          draft_overall?: number | null
          draft_round?: number | null
          draft_team?: string | null
          draft_year?: number | null
          gsis_id?: string | null
          guaranteed?: number | null
          height?: string | null
          inflated_apy?: number | null
          inflated_guaranteed?: number | null
          inflated_value?: number | null
          is_active?: boolean | null
          otc_id?: string | null
          player?: string
          player_page?: string | null
          position?: string
          team?: string
          value?: number | null
          weight?: string | null
          year_signed?: string | null
          years?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_depth_charts: {
        Row: {
          club_code: string | null
          depth_position: string | null
          depth_team: number | null
          elias_id: string | null
          first_name: string | null
          football_name: string | null
          formation: string | null
          full_name: string
          game_type: string | null
          gsis_id: string
          jersey_number: number | null
          last_name: string | null
          position: string
          season: number
          week: number | null
        }
        Insert: {
          club_code?: string | null
          depth_position?: string | null
          depth_team?: number | null
          elias_id?: string | null
          first_name?: string | null
          football_name?: string | null
          formation?: string | null
          full_name: string
          game_type?: string | null
          gsis_id: string
          jersey_number?: number | null
          last_name?: string | null
          position: string
          season: number
          week?: number | null
        }
        Update: {
          club_code?: string | null
          depth_position?: string | null
          depth_team?: number | null
          elias_id?: string | null
          first_name?: string | null
          football_name?: string | null
          formation?: string | null
          full_name?: string
          game_type?: string | null
          gsis_id?: string
          jersey_number?: number | null
          last_name?: string | null
          position?: string
          season?: number
          week?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_draft_picks: {
        Row: {
          age: number | null
          allpro: number | null
          car_av: number | null
          category: string | null
          cfb_player_id: string | null
          college: string | null
          def_ints: number | null
          def_sacks: number | null
          def_solo_tackles: number | null
          dr_av: number | null
          games: number | null
          gsis_id: string | null
          hof: boolean | null
          pass_attempts: number | null
          pass_completions: number | null
          pass_ints: number | null
          pass_tds: number | null
          pass_yards: number | null
          pfr_player_id: string | null
          pfr_player_name: string
          pick: number
          position: string
          probowls: number | null
          rec_tds: number | null
          rec_yards: number | null
          receptions: number | null
          round: number
          rush_atts: number | null
          rush_tds: number | null
          rush_yards: number | null
          season: number
          seasons_started: number | null
          side: string | null
          team: string
          to: number | null
          w_av: number | null
        }
        Insert: {
          age?: number | null
          allpro?: number | null
          car_av?: number | null
          category?: string | null
          cfb_player_id?: string | null
          college?: string | null
          def_ints?: number | null
          def_sacks?: number | null
          def_solo_tackles?: number | null
          dr_av?: number | null
          games?: number | null
          gsis_id?: string | null
          hof?: boolean | null
          pass_attempts?: number | null
          pass_completions?: number | null
          pass_ints?: number | null
          pass_tds?: number | null
          pass_yards?: number | null
          pfr_player_id?: string | null
          pfr_player_name: string
          pick: number
          position: string
          probowls?: number | null
          rec_tds?: number | null
          rec_yards?: number | null
          receptions?: number | null
          round: number
          rush_atts?: number | null
          rush_tds?: number | null
          rush_yards?: number | null
          season: number
          seasons_started?: number | null
          side?: string | null
          team: string
          to?: number | null
          w_av?: number | null
        }
        Update: {
          age?: number | null
          allpro?: number | null
          car_av?: number | null
          category?: string | null
          cfb_player_id?: string | null
          college?: string | null
          def_ints?: number | null
          def_sacks?: number | null
          def_solo_tackles?: number | null
          dr_av?: number | null
          games?: number | null
          gsis_id?: string | null
          hof?: boolean | null
          pass_attempts?: number | null
          pass_completions?: number | null
          pass_ints?: number | null
          pass_tds?: number | null
          pass_yards?: number | null
          pfr_player_id?: string | null
          pfr_player_name?: string
          pick?: number
          position?: string
          probowls?: number | null
          rec_tds?: number | null
          rec_yards?: number | null
          receptions?: number | null
          round?: number
          rush_atts?: number | null
          rush_tds?: number | null
          rush_yards?: number | null
          season?: number
          seasons_started?: number | null
          side?: string | null
          team?: string
          to?: number | null
          w_av?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_espn_qbr_season: {
        Row: {
          epa_total: number | null
          exp_sack: number | null
          game_week: string | null
          headshot_href: string | null
          name_display: string
          name_first: string | null
          name_last: string | null
          name_short: string | null
          pass: number | null
          penalty: number | null
          player_id: number | null
          pts_added: number | null
          qb_plays: number | null
          qbr_raw: number | null
          qbr_total: number | null
          qualified: boolean | null
          rank: number | null
          run: number | null
          sack: number | null
          season: number
          season_type: string
          team: string
          team_abb: string | null
        }
        Insert: {
          epa_total?: number | null
          exp_sack?: number | null
          game_week?: string | null
          headshot_href?: string | null
          name_display: string
          name_first?: string | null
          name_last?: string | null
          name_short?: string | null
          pass?: number | null
          penalty?: number | null
          player_id?: number | null
          pts_added?: number | null
          qb_plays?: number | null
          qbr_raw?: number | null
          qbr_total?: number | null
          qualified?: boolean | null
          rank?: number | null
          run?: number | null
          sack?: number | null
          season: number
          season_type: string
          team: string
          team_abb?: string | null
        }
        Update: {
          epa_total?: number | null
          exp_sack?: number | null
          game_week?: string | null
          headshot_href?: string | null
          name_display?: string
          name_first?: string | null
          name_last?: string | null
          name_short?: string | null
          pass?: number | null
          penalty?: number | null
          player_id?: number | null
          pts_added?: number | null
          qb_plays?: number | null
          qbr_raw?: number | null
          qbr_total?: number | null
          qualified?: boolean | null
          rank?: number | null
          run?: number | null
          sack?: number | null
          season?: number
          season_type?: string
          team?: string
          team_abb?: string | null
        }
        Relationships: []
      }
      nflreadr_nfl_espn_qbr_week: {
        Row: {
          epa_total: number | null
          exp_sack: number | null
          game_id: number | null
          game_week: number
          headshot_href: string | null
          name_display: string
          name_first: string | null
          name_last: string | null
          name_short: string | null
          opp_abb: string | null
          opp_id: number | null
          opp_name: string | null
          opp_team: string | null
          pass: number | null
          penalty: number | null
          player_id: number | null
          pts_added: number | null
          qb_plays: number | null
          qbr_raw: number | null
          qbr_total: number | null
          qualified: boolean | null
          rank: number | null
          run: number | null
          sack: number | null
          season: number
          season_type: string | null
          team: string
          team_abb: string | null
          week_num: number | null
          week_text: string
        }
        Insert: {
          epa_total?: number | null
          exp_sack?: number | null
          game_id?: number | null
          game_week: number
          headshot_href?: string | null
          name_display: string
          name_first?: string | null
          name_last?: string | null
          name_short?: string | null
          opp_abb?: string | null
          opp_id?: number | null
          opp_name?: string | null
          opp_team?: string | null
          pass?: number | null
          penalty?: number | null
          player_id?: number | null
          pts_added?: number | null
          qb_plays?: number | null
          qbr_raw?: number | null
          qbr_total?: number | null
          qualified?: boolean | null
          rank?: number | null
          run?: number | null
          sack?: number | null
          season: number
          season_type?: string | null
          team: string
          team_abb?: string | null
          week_num?: number | null
          week_text: string
        }
        Update: {
          epa_total?: number | null
          exp_sack?: number | null
          game_id?: number | null
          game_week?: number
          headshot_href?: string | null
          name_display?: string
          name_first?: string | null
          name_last?: string | null
          name_short?: string | null
          opp_abb?: string | null
          opp_id?: number | null
          opp_name?: string | null
          opp_team?: string | null
          pass?: number | null
          penalty?: number | null
          player_id?: number | null
          pts_added?: number | null
          qb_plays?: number | null
          qbr_raw?: number | null
          qbr_total?: number | null
          qualified?: boolean | null
          rank?: number | null
          run?: number | null
          sack?: number | null
          season?: number
          season_type?: string | null
          team?: string
          team_abb?: string | null
          week_num?: number | null
          week_text?: string
        }
        Relationships: []
      }
      nflreadr_nfl_ff_opportunity: {
        Row: {
          full_name: string | null
          game_id: string | null
          pass_air_yards: number | null
          pass_air_yards_team: number | null
          pass_attempt: number | null
          pass_attempt_team: number | null
          pass_completions: number | null
          pass_completions_diff: number | null
          pass_completions_diff_team: number | null
          pass_completions_exp: number | null
          pass_completions_exp_team: number | null
          pass_completions_team: number | null
          pass_fantasy_points: number | null
          pass_fantasy_points_diff: number | null
          pass_fantasy_points_diff_team: number | null
          pass_fantasy_points_exp: number | null
          pass_fantasy_points_exp_team: number | null
          pass_fantasy_points_team: number | null
          pass_first_down: number | null
          pass_first_down_diff: number | null
          pass_first_down_diff_team: number | null
          pass_first_down_exp: number | null
          pass_first_down_exp_team: number | null
          pass_first_down_team: number | null
          pass_interception: number | null
          pass_interception_diff: number | null
          pass_interception_diff_team: number | null
          pass_interception_exp: number | null
          pass_interception_exp_team: number | null
          pass_interception_team: number | null
          pass_touchdown: number | null
          pass_touchdown_diff: number | null
          pass_touchdown_diff_team: number | null
          pass_touchdown_exp: number | null
          pass_touchdown_exp_team: number | null
          pass_touchdown_team: number | null
          pass_two_point_conv: number | null
          pass_two_point_conv_diff: number | null
          pass_two_point_conv_diff_team: number | null
          pass_two_point_conv_exp: number | null
          pass_two_point_conv_exp_team: number | null
          pass_two_point_conv_team: number | null
          pass_yards_gained: number | null
          pass_yards_gained_diff: number | null
          pass_yards_gained_diff_team: number | null
          pass_yards_gained_exp: number | null
          pass_yards_gained_exp_team: number | null
          pass_yards_gained_team: number | null
          player_id: string
          position: string
          posteam: string
          rec_air_yards: number | null
          rec_air_yards_team: number | null
          rec_attempt: number | null
          rec_attempt_team: number | null
          rec_fantasy_points: number | null
          rec_fantasy_points_diff: number | null
          rec_fantasy_points_diff_team: number | null
          rec_fantasy_points_exp: number | null
          rec_fantasy_points_exp_team: number | null
          rec_fantasy_points_team: number | null
          rec_first_down: number | null
          rec_first_down_diff: number | null
          rec_first_down_diff_team: number | null
          rec_first_down_exp: number | null
          rec_first_down_exp_team: number | null
          rec_first_down_team: number | null
          rec_fumble_lost: number | null
          rec_fumble_lost_team: number | null
          rec_interception: number | null
          rec_interception_diff: number | null
          rec_interception_diff_team: number | null
          rec_interception_exp: number | null
          rec_interception_exp_team: number | null
          rec_interception_team: number | null
          rec_touchdown: number | null
          rec_touchdown_diff: number | null
          rec_touchdown_diff_team: number | null
          rec_touchdown_exp: number | null
          rec_touchdown_exp_team: number | null
          rec_touchdown_team: number | null
          rec_two_point_conv: number | null
          rec_two_point_conv_diff: number | null
          rec_two_point_conv_diff_team: number | null
          rec_two_point_conv_exp: number | null
          rec_two_point_conv_exp_team: number | null
          rec_two_point_conv_team: number | null
          rec_yards_gained: number | null
          rec_yards_gained_diff: number | null
          rec_yards_gained_diff_team: number | null
          rec_yards_gained_exp: number | null
          rec_yards_gained_exp_team: number | null
          rec_yards_gained_team: number | null
          receptions: number | null
          receptions_diff: number | null
          receptions_diff_team: number | null
          receptions_exp: number | null
          receptions_exp_team: number | null
          receptions_team: number | null
          rush_attempt: number | null
          rush_attempt_team: number | null
          rush_fantasy_points: number | null
          rush_fantasy_points_diff: number | null
          rush_fantasy_points_diff_team: number | null
          rush_fantasy_points_exp: number | null
          rush_fantasy_points_exp_team: number | null
          rush_fantasy_points_team: number | null
          rush_first_down: number | null
          rush_first_down_diff: number | null
          rush_first_down_diff_team: number | null
          rush_first_down_exp: number | null
          rush_first_down_exp_team: number | null
          rush_first_down_team: number | null
          rush_fumble_lost: number | null
          rush_fumble_lost_team: number | null
          rush_touchdown: number | null
          rush_touchdown_diff: number | null
          rush_touchdown_diff_team: number | null
          rush_touchdown_exp: number | null
          rush_touchdown_exp_team: number | null
          rush_touchdown_team: number | null
          rush_two_point_conv: number | null
          rush_two_point_conv_diff: number | null
          rush_two_point_conv_diff_team: number | null
          rush_two_point_conv_exp: number | null
          rush_two_point_conv_exp_team: number | null
          rush_two_point_conv_team: number | null
          rush_yards_gained: number | null
          rush_yards_gained_diff: number | null
          rush_yards_gained_diff_team: number | null
          rush_yards_gained_exp: number | null
          rush_yards_gained_exp_team: number | null
          rush_yards_gained_team: number | null
          season: number
          total_fantasy_points: number | null
          total_fantasy_points_diff: number | null
          total_fantasy_points_diff_team: number | null
          total_fantasy_points_exp: number | null
          total_fantasy_points_exp_team: number | null
          total_fantasy_points_team: number | null
          total_first_down: number | null
          total_first_down_diff: number | null
          total_first_down_diff_team: number | null
          total_first_down_exp: number | null
          total_first_down_exp_team: number | null
          total_first_down_team: number | null
          total_touchdown: number | null
          total_touchdown_diff: number | null
          total_touchdown_diff_team: number | null
          total_touchdown_exp: number | null
          total_touchdown_exp_team: number | null
          total_touchdown_team: number | null
          total_yards_gained: number | null
          total_yards_gained_diff: number | null
          total_yards_gained_diff_team: number | null
          total_yards_gained_exp: number | null
          total_yards_gained_exp_team: number | null
          total_yards_gained_team: number | null
          week: number
        }
        Insert: {
          full_name?: string | null
          game_id?: string | null
          pass_air_yards?: number | null
          pass_air_yards_team?: number | null
          pass_attempt?: number | null
          pass_attempt_team?: number | null
          pass_completions?: number | null
          pass_completions_diff?: number | null
          pass_completions_diff_team?: number | null
          pass_completions_exp?: number | null
          pass_completions_exp_team?: number | null
          pass_completions_team?: number | null
          pass_fantasy_points?: number | null
          pass_fantasy_points_diff?: number | null
          pass_fantasy_points_diff_team?: number | null
          pass_fantasy_points_exp?: number | null
          pass_fantasy_points_exp_team?: number | null
          pass_fantasy_points_team?: number | null
          pass_first_down?: number | null
          pass_first_down_diff?: number | null
          pass_first_down_diff_team?: number | null
          pass_first_down_exp?: number | null
          pass_first_down_exp_team?: number | null
          pass_first_down_team?: number | null
          pass_interception?: number | null
          pass_interception_diff?: number | null
          pass_interception_diff_team?: number | null
          pass_interception_exp?: number | null
          pass_interception_exp_team?: number | null
          pass_interception_team?: number | null
          pass_touchdown?: number | null
          pass_touchdown_diff?: number | null
          pass_touchdown_diff_team?: number | null
          pass_touchdown_exp?: number | null
          pass_touchdown_exp_team?: number | null
          pass_touchdown_team?: number | null
          pass_two_point_conv?: number | null
          pass_two_point_conv_diff?: number | null
          pass_two_point_conv_diff_team?: number | null
          pass_two_point_conv_exp?: number | null
          pass_two_point_conv_exp_team?: number | null
          pass_two_point_conv_team?: number | null
          pass_yards_gained?: number | null
          pass_yards_gained_diff?: number | null
          pass_yards_gained_diff_team?: number | null
          pass_yards_gained_exp?: number | null
          pass_yards_gained_exp_team?: number | null
          pass_yards_gained_team?: number | null
          player_id: string
          position: string
          posteam: string
          rec_air_yards?: number | null
          rec_air_yards_team?: number | null
          rec_attempt?: number | null
          rec_attempt_team?: number | null
          rec_fantasy_points?: number | null
          rec_fantasy_points_diff?: number | null
          rec_fantasy_points_diff_team?: number | null
          rec_fantasy_points_exp?: number | null
          rec_fantasy_points_exp_team?: number | null
          rec_fantasy_points_team?: number | null
          rec_first_down?: number | null
          rec_first_down_diff?: number | null
          rec_first_down_diff_team?: number | null
          rec_first_down_exp?: number | null
          rec_first_down_exp_team?: number | null
          rec_first_down_team?: number | null
          rec_fumble_lost?: number | null
          rec_fumble_lost_team?: number | null
          rec_interception?: number | null
          rec_interception_diff?: number | null
          rec_interception_diff_team?: number | null
          rec_interception_exp?: number | null
          rec_interception_exp_team?: number | null
          rec_interception_team?: number | null
          rec_touchdown?: number | null
          rec_touchdown_diff?: number | null
          rec_touchdown_diff_team?: number | null
          rec_touchdown_exp?: number | null
          rec_touchdown_exp_team?: number | null
          rec_touchdown_team?: number | null
          rec_two_point_conv?: number | null
          rec_two_point_conv_diff?: number | null
          rec_two_point_conv_diff_team?: number | null
          rec_two_point_conv_exp?: number | null
          rec_two_point_conv_exp_team?: number | null
          rec_two_point_conv_team?: number | null
          rec_yards_gained?: number | null
          rec_yards_gained_diff?: number | null
          rec_yards_gained_diff_team?: number | null
          rec_yards_gained_exp?: number | null
          rec_yards_gained_exp_team?: number | null
          rec_yards_gained_team?: number | null
          receptions?: number | null
          receptions_diff?: number | null
          receptions_diff_team?: number | null
          receptions_exp?: number | null
          receptions_exp_team?: number | null
          receptions_team?: number | null
          rush_attempt?: number | null
          rush_attempt_team?: number | null
          rush_fantasy_points?: number | null
          rush_fantasy_points_diff?: number | null
          rush_fantasy_points_diff_team?: number | null
          rush_fantasy_points_exp?: number | null
          rush_fantasy_points_exp_team?: number | null
          rush_fantasy_points_team?: number | null
          rush_first_down?: number | null
          rush_first_down_diff?: number | null
          rush_first_down_diff_team?: number | null
          rush_first_down_exp?: number | null
          rush_first_down_exp_team?: number | null
          rush_first_down_team?: number | null
          rush_fumble_lost?: number | null
          rush_fumble_lost_team?: number | null
          rush_touchdown?: number | null
          rush_touchdown_diff?: number | null
          rush_touchdown_diff_team?: number | null
          rush_touchdown_exp?: number | null
          rush_touchdown_exp_team?: number | null
          rush_touchdown_team?: number | null
          rush_two_point_conv?: number | null
          rush_two_point_conv_diff?: number | null
          rush_two_point_conv_diff_team?: number | null
          rush_two_point_conv_exp?: number | null
          rush_two_point_conv_exp_team?: number | null
          rush_two_point_conv_team?: number | null
          rush_yards_gained?: number | null
          rush_yards_gained_diff?: number | null
          rush_yards_gained_diff_team?: number | null
          rush_yards_gained_exp?: number | null
          rush_yards_gained_exp_team?: number | null
          rush_yards_gained_team?: number | null
          season: number
          total_fantasy_points?: number | null
          total_fantasy_points_diff?: number | null
          total_fantasy_points_diff_team?: number | null
          total_fantasy_points_exp?: number | null
          total_fantasy_points_exp_team?: number | null
          total_fantasy_points_team?: number | null
          total_first_down?: number | null
          total_first_down_diff?: number | null
          total_first_down_diff_team?: number | null
          total_first_down_exp?: number | null
          total_first_down_exp_team?: number | null
          total_first_down_team?: number | null
          total_touchdown?: number | null
          total_touchdown_diff?: number | null
          total_touchdown_diff_team?: number | null
          total_touchdown_exp?: number | null
          total_touchdown_exp_team?: number | null
          total_touchdown_team?: number | null
          total_yards_gained?: number | null
          total_yards_gained_diff?: number | null
          total_yards_gained_diff_team?: number | null
          total_yards_gained_exp?: number | null
          total_yards_gained_exp_team?: number | null
          total_yards_gained_team?: number | null
          week: number
        }
        Update: {
          full_name?: string | null
          game_id?: string | null
          pass_air_yards?: number | null
          pass_air_yards_team?: number | null
          pass_attempt?: number | null
          pass_attempt_team?: number | null
          pass_completions?: number | null
          pass_completions_diff?: number | null
          pass_completions_diff_team?: number | null
          pass_completions_exp?: number | null
          pass_completions_exp_team?: number | null
          pass_completions_team?: number | null
          pass_fantasy_points?: number | null
          pass_fantasy_points_diff?: number | null
          pass_fantasy_points_diff_team?: number | null
          pass_fantasy_points_exp?: number | null
          pass_fantasy_points_exp_team?: number | null
          pass_fantasy_points_team?: number | null
          pass_first_down?: number | null
          pass_first_down_diff?: number | null
          pass_first_down_diff_team?: number | null
          pass_first_down_exp?: number | null
          pass_first_down_exp_team?: number | null
          pass_first_down_team?: number | null
          pass_interception?: number | null
          pass_interception_diff?: number | null
          pass_interception_diff_team?: number | null
          pass_interception_exp?: number | null
          pass_interception_exp_team?: number | null
          pass_interception_team?: number | null
          pass_touchdown?: number | null
          pass_touchdown_diff?: number | null
          pass_touchdown_diff_team?: number | null
          pass_touchdown_exp?: number | null
          pass_touchdown_exp_team?: number | null
          pass_touchdown_team?: number | null
          pass_two_point_conv?: number | null
          pass_two_point_conv_diff?: number | null
          pass_two_point_conv_diff_team?: number | null
          pass_two_point_conv_exp?: number | null
          pass_two_point_conv_exp_team?: number | null
          pass_two_point_conv_team?: number | null
          pass_yards_gained?: number | null
          pass_yards_gained_diff?: number | null
          pass_yards_gained_diff_team?: number | null
          pass_yards_gained_exp?: number | null
          pass_yards_gained_exp_team?: number | null
          pass_yards_gained_team?: number | null
          player_id?: string
          position?: string
          posteam?: string
          rec_air_yards?: number | null
          rec_air_yards_team?: number | null
          rec_attempt?: number | null
          rec_attempt_team?: number | null
          rec_fantasy_points?: number | null
          rec_fantasy_points_diff?: number | null
          rec_fantasy_points_diff_team?: number | null
          rec_fantasy_points_exp?: number | null
          rec_fantasy_points_exp_team?: number | null
          rec_fantasy_points_team?: number | null
          rec_first_down?: number | null
          rec_first_down_diff?: number | null
          rec_first_down_diff_team?: number | null
          rec_first_down_exp?: number | null
          rec_first_down_exp_team?: number | null
          rec_first_down_team?: number | null
          rec_fumble_lost?: number | null
          rec_fumble_lost_team?: number | null
          rec_interception?: number | null
          rec_interception_diff?: number | null
          rec_interception_diff_team?: number | null
          rec_interception_exp?: number | null
          rec_interception_exp_team?: number | null
          rec_interception_team?: number | null
          rec_touchdown?: number | null
          rec_touchdown_diff?: number | null
          rec_touchdown_diff_team?: number | null
          rec_touchdown_exp?: number | null
          rec_touchdown_exp_team?: number | null
          rec_touchdown_team?: number | null
          rec_two_point_conv?: number | null
          rec_two_point_conv_diff?: number | null
          rec_two_point_conv_diff_team?: number | null
          rec_two_point_conv_exp?: number | null
          rec_two_point_conv_exp_team?: number | null
          rec_two_point_conv_team?: number | null
          rec_yards_gained?: number | null
          rec_yards_gained_diff?: number | null
          rec_yards_gained_diff_team?: number | null
          rec_yards_gained_exp?: number | null
          rec_yards_gained_exp_team?: number | null
          rec_yards_gained_team?: number | null
          receptions?: number | null
          receptions_diff?: number | null
          receptions_diff_team?: number | null
          receptions_exp?: number | null
          receptions_exp_team?: number | null
          receptions_team?: number | null
          rush_attempt?: number | null
          rush_attempt_team?: number | null
          rush_fantasy_points?: number | null
          rush_fantasy_points_diff?: number | null
          rush_fantasy_points_diff_team?: number | null
          rush_fantasy_points_exp?: number | null
          rush_fantasy_points_exp_team?: number | null
          rush_fantasy_points_team?: number | null
          rush_first_down?: number | null
          rush_first_down_diff?: number | null
          rush_first_down_diff_team?: number | null
          rush_first_down_exp?: number | null
          rush_first_down_exp_team?: number | null
          rush_first_down_team?: number | null
          rush_fumble_lost?: number | null
          rush_fumble_lost_team?: number | null
          rush_touchdown?: number | null
          rush_touchdown_diff?: number | null
          rush_touchdown_diff_team?: number | null
          rush_touchdown_exp?: number | null
          rush_touchdown_exp_team?: number | null
          rush_touchdown_team?: number | null
          rush_two_point_conv?: number | null
          rush_two_point_conv_diff?: number | null
          rush_two_point_conv_diff_team?: number | null
          rush_two_point_conv_exp?: number | null
          rush_two_point_conv_exp_team?: number | null
          rush_two_point_conv_team?: number | null
          rush_yards_gained?: number | null
          rush_yards_gained_diff?: number | null
          rush_yards_gained_diff_team?: number | null
          rush_yards_gained_exp?: number | null
          rush_yards_gained_exp_team?: number | null
          rush_yards_gained_team?: number | null
          season?: number
          total_fantasy_points?: number | null
          total_fantasy_points_diff?: number | null
          total_fantasy_points_diff_team?: number | null
          total_fantasy_points_exp?: number | null
          total_fantasy_points_exp_team?: number | null
          total_fantasy_points_team?: number | null
          total_first_down?: number | null
          total_first_down_diff?: number | null
          total_first_down_diff_team?: number | null
          total_first_down_exp?: number | null
          total_first_down_exp_team?: number | null
          total_first_down_team?: number | null
          total_touchdown?: number | null
          total_touchdown_diff?: number | null
          total_touchdown_diff_team?: number | null
          total_touchdown_exp?: number | null
          total_touchdown_exp_team?: number | null
          total_touchdown_team?: number | null
          total_yards_gained?: number | null
          total_yards_gained_diff?: number | null
          total_yards_gained_diff_team?: number | null
          total_yards_gained_exp?: number | null
          total_yards_gained_exp_team?: number | null
          total_yards_gained_team?: number | null
          week?: number
        }
        Relationships: []
      }
      nflreadr_nfl_ff_playerids: {
        Row: {
          age: number | null
          birthdate: string | null
          cbs_id: number | null
          cfbref_id: string | null
          college: string | null
          db_season: number | null
          draft_ovr: number | null
          draft_pick: number | null
          draft_round: number | null
          draft_year: number | null
          espn_id: number | null
          fantasy_data_id: number | null
          fantasypros_id: number | null
          fleaflicker_id: number | null
          gsis_id: string | null
          height: number | null
          ktc_id: number | null
          merge_name: string | null
          mfl_id: number | null
          name: string
          nfl_id: string | null
          pff_id: number | null
          pfr_id: string | null
          position: string
          rotowire_id: number | null
          rotoworld_id: number | null
          sleeper_id: number | null
          sportradar_id: string | null
          stats_global_id: number | null
          stats_id: number | null
          swish_id: number | null
          team: string
          twitter_username: string | null
          weight: number | null
          yahoo_id: number | null
        }
        Insert: {
          age?: number | null
          birthdate?: string | null
          cbs_id?: number | null
          cfbref_id?: string | null
          college?: string | null
          db_season?: number | null
          draft_ovr?: number | null
          draft_pick?: number | null
          draft_round?: number | null
          draft_year?: number | null
          espn_id?: number | null
          fantasy_data_id?: number | null
          fantasypros_id?: number | null
          fleaflicker_id?: number | null
          gsis_id?: string | null
          height?: number | null
          ktc_id?: number | null
          merge_name?: string | null
          mfl_id?: number | null
          name: string
          nfl_id?: string | null
          pff_id?: number | null
          pfr_id?: string | null
          position: string
          rotowire_id?: number | null
          rotoworld_id?: number | null
          sleeper_id?: number | null
          sportradar_id?: string | null
          stats_global_id?: number | null
          stats_id?: number | null
          swish_id?: number | null
          team: string
          twitter_username?: string | null
          weight?: number | null
          yahoo_id?: number | null
        }
        Update: {
          age?: number | null
          birthdate?: string | null
          cbs_id?: number | null
          cfbref_id?: string | null
          college?: string | null
          db_season?: number | null
          draft_ovr?: number | null
          draft_pick?: number | null
          draft_round?: number | null
          draft_year?: number | null
          espn_id?: number | null
          fantasy_data_id?: number | null
          fantasypros_id?: number | null
          fleaflicker_id?: number | null
          gsis_id?: string | null
          height?: number | null
          ktc_id?: number | null
          merge_name?: string | null
          mfl_id?: number | null
          name?: string
          nfl_id?: string | null
          pff_id?: number | null
          pfr_id?: string | null
          position?: string
          rotowire_id?: number | null
          rotoworld_id?: number | null
          sleeper_id?: number | null
          sportradar_id?: string | null
          stats_global_id?: number | null
          stats_id?: number | null
          swish_id?: number | null
          team?: string
          twitter_username?: string | null
          weight?: number | null
          yahoo_id?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_ff_rankings: {
        Row: {
          best: number | null
          bye: number | null
          cbs_id: number | null
          ecr: number | null
          ecr_type: string | null
          fp_page: string | null
          id: number
          mergename: string | null
          page_type: string
          player: string
          player_filename: string | null
          player_image_url: number | null
          player_owned_avg: number | null
          player_owned_espn: number | null
          player_owned_yahoo: number | null
          player_square_image_url: number | null
          pos: string | null
          rank_delta: number | null
          scrape_date: string | null
          sd: number | null
          sportsdata_id: number | null
          team: string
          tm: string | null
          worst: number | null
          yahoo_id: number | null
        }
        Insert: {
          best?: number | null
          bye?: number | null
          cbs_id?: number | null
          ecr?: number | null
          ecr_type?: string | null
          fp_page?: string | null
          id: number
          mergename?: string | null
          page_type: string
          player: string
          player_filename?: string | null
          player_image_url?: number | null
          player_owned_avg?: number | null
          player_owned_espn?: number | null
          player_owned_yahoo?: number | null
          player_square_image_url?: number | null
          pos?: string | null
          rank_delta?: number | null
          scrape_date?: string | null
          sd?: number | null
          sportsdata_id?: number | null
          team: string
          tm?: string | null
          worst?: number | null
          yahoo_id?: number | null
        }
        Update: {
          best?: number | null
          bye?: number | null
          cbs_id?: number | null
          ecr?: number | null
          ecr_type?: string | null
          fp_page?: string | null
          id?: number
          mergename?: string | null
          page_type?: string
          player?: string
          player_filename?: string | null
          player_image_url?: number | null
          player_owned_avg?: number | null
          player_owned_espn?: number | null
          player_owned_yahoo?: number | null
          player_square_image_url?: number | null
          pos?: string | null
          rank_delta?: number | null
          scrape_date?: string | null
          sd?: number | null
          sportsdata_id?: number | null
          team?: string
          tm?: string | null
          worst?: number | null
          yahoo_id?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_ftn_charting: {
        Row: {
          date_pulled: string | null
          ftn_game_id: number
          ftn_play_id: number
          is_catchable_ball: boolean | null
          is_contested_ball: boolean | null
          is_created_reception: boolean | null
          is_drop: boolean | null
          is_interception_worthy: boolean | null
          is_motion: boolean | null
          is_no_huddle: boolean | null
          is_play_action: boolean | null
          is_qb_fault_sack: boolean | null
          is_qb_out_of_pocket: boolean | null
          is_qb_sneak: boolean | null
          is_rpo: boolean | null
          is_screen_pass: boolean | null
          is_throw_away: boolean | null
          is_trick_play: boolean | null
          n_blitzers: number | null
          n_defense_box: number | null
          n_offense_backfield: number | null
          n_pass_rushers: number | null
          nflverse_game_id: string | null
          nflverse_play_id: number | null
          qb_location: string | null
          read_thrown: string | null
          season: number
          starting_hash: string | null
          week: number
        }
        Insert: {
          date_pulled?: string | null
          ftn_game_id: number
          ftn_play_id: number
          is_catchable_ball?: boolean | null
          is_contested_ball?: boolean | null
          is_created_reception?: boolean | null
          is_drop?: boolean | null
          is_interception_worthy?: boolean | null
          is_motion?: boolean | null
          is_no_huddle?: boolean | null
          is_play_action?: boolean | null
          is_qb_fault_sack?: boolean | null
          is_qb_out_of_pocket?: boolean | null
          is_qb_sneak?: boolean | null
          is_rpo?: boolean | null
          is_screen_pass?: boolean | null
          is_throw_away?: boolean | null
          is_trick_play?: boolean | null
          n_blitzers?: number | null
          n_defense_box?: number | null
          n_offense_backfield?: number | null
          n_pass_rushers?: number | null
          nflverse_game_id?: string | null
          nflverse_play_id?: number | null
          qb_location?: string | null
          read_thrown?: string | null
          season: number
          starting_hash?: string | null
          week: number
        }
        Update: {
          date_pulled?: string | null
          ftn_game_id?: number
          ftn_play_id?: number
          is_catchable_ball?: boolean | null
          is_contested_ball?: boolean | null
          is_created_reception?: boolean | null
          is_drop?: boolean | null
          is_interception_worthy?: boolean | null
          is_motion?: boolean | null
          is_no_huddle?: boolean | null
          is_play_action?: boolean | null
          is_qb_fault_sack?: boolean | null
          is_qb_out_of_pocket?: boolean | null
          is_qb_sneak?: boolean | null
          is_rpo?: boolean | null
          is_screen_pass?: boolean | null
          is_throw_away?: boolean | null
          is_trick_play?: boolean | null
          n_blitzers?: number | null
          n_defense_box?: number | null
          n_offense_backfield?: number | null
          n_pass_rushers?: number | null
          nflverse_game_id?: string | null
          nflverse_play_id?: number | null
          qb_location?: string | null
          read_thrown?: string | null
          season?: number
          starting_hash?: string | null
          week?: number
        }
        Relationships: []
      }
      nflreadr_nfl_injuries: {
        Row: {
          date_modified: string | null
          first_name: string | null
          full_name: string
          game_type: string | null
          gsis_id: string | null
          last_name: string | null
          position: string
          practice_primary_injury: string | null
          practice_secondary_injury: string | null
          practice_status: string | null
          report_primary_injury: string | null
          report_secondary_injury: string | null
          report_status: string | null
          season: number
          team: string
          week: number
        }
        Insert: {
          date_modified?: string | null
          first_name?: string | null
          full_name: string
          game_type?: string | null
          gsis_id?: string | null
          last_name?: string | null
          position: string
          practice_primary_injury?: string | null
          practice_secondary_injury?: string | null
          practice_status?: string | null
          report_primary_injury?: string | null
          report_secondary_injury?: string | null
          report_status?: string | null
          season: number
          team: string
          week: number
        }
        Update: {
          date_modified?: string | null
          first_name?: string | null
          full_name?: string
          game_type?: string | null
          gsis_id?: string | null
          last_name?: string | null
          position?: string
          practice_primary_injury?: string | null
          practice_secondary_injury?: string | null
          practice_status?: string | null
          report_primary_injury?: string | null
          report_secondary_injury?: string | null
          report_status?: string | null
          season?: number
          team?: string
          week?: number
        }
        Relationships: []
      }
      nflreadr_nfl_nextgen_stats_passing: {
        Row: {
          aggressiveness: number | null
          attempts: number | null
          avg_air_distance: number | null
          avg_air_yards_differential: number | null
          avg_air_yards_to_sticks: number | null
          avg_completed_air_yards: number | null
          avg_intended_air_yards: number | null
          avg_time_to_throw: number | null
          completion_percentage: number | null
          completion_percentage_above_expectation: number | null
          completions: number | null
          expected_completion_percentage: number | null
          interceptions: number | null
          max_air_distance: number | null
          max_completed_air_distance: number | null
          pass_touchdowns: number | null
          pass_yards: number | null
          passer_rating: number | null
          player_display_name: string
          player_first_name: string | null
          player_gsis_id: string | null
          player_jersey_number: number | null
          player_last_name: string | null
          player_position: string
          player_short_name: string | null
          season: number
          season_type: string | null
          team_abbr: string
          week: number
        }
        Insert: {
          aggressiveness?: number | null
          attempts?: number | null
          avg_air_distance?: number | null
          avg_air_yards_differential?: number | null
          avg_air_yards_to_sticks?: number | null
          avg_completed_air_yards?: number | null
          avg_intended_air_yards?: number | null
          avg_time_to_throw?: number | null
          completion_percentage?: number | null
          completion_percentage_above_expectation?: number | null
          completions?: number | null
          expected_completion_percentage?: number | null
          interceptions?: number | null
          max_air_distance?: number | null
          max_completed_air_distance?: number | null
          pass_touchdowns?: number | null
          pass_yards?: number | null
          passer_rating?: number | null
          player_display_name: string
          player_first_name?: string | null
          player_gsis_id?: string | null
          player_jersey_number?: number | null
          player_last_name?: string | null
          player_position: string
          player_short_name?: string | null
          season: number
          season_type?: string | null
          team_abbr: string
          week: number
        }
        Update: {
          aggressiveness?: number | null
          attempts?: number | null
          avg_air_distance?: number | null
          avg_air_yards_differential?: number | null
          avg_air_yards_to_sticks?: number | null
          avg_completed_air_yards?: number | null
          avg_intended_air_yards?: number | null
          avg_time_to_throw?: number | null
          completion_percentage?: number | null
          completion_percentage_above_expectation?: number | null
          completions?: number | null
          expected_completion_percentage?: number | null
          interceptions?: number | null
          max_air_distance?: number | null
          max_completed_air_distance?: number | null
          pass_touchdowns?: number | null
          pass_yards?: number | null
          passer_rating?: number | null
          player_display_name?: string
          player_first_name?: string | null
          player_gsis_id?: string | null
          player_jersey_number?: number | null
          player_last_name?: string | null
          player_position?: string
          player_short_name?: string | null
          season?: number
          season_type?: string | null
          team_abbr?: string
          week?: number
        }
        Relationships: []
      }
      nflreadr_nfl_nextgen_stats_receiving: {
        Row: {
          avg_cushion: number | null
          avg_expected_yac: number | null
          avg_intended_air_yards: number | null
          avg_separation: number | null
          avg_yac: number | null
          avg_yac_above_expectation: number | null
          catch_percentage: number | null
          percent_share_of_intended_air_yards: number | null
          player_display_name: string
          player_first_name: string | null
          player_gsis_id: string | null
          player_jersey_number: number | null
          player_last_name: string | null
          player_position: string
          player_short_name: string | null
          rec_touchdowns: number | null
          receptions: number | null
          season: number
          season_type: string | null
          targets: number | null
          team_abbr: string
          week: number
          yards: number | null
        }
        Insert: {
          avg_cushion?: number | null
          avg_expected_yac?: number | null
          avg_intended_air_yards?: number | null
          avg_separation?: number | null
          avg_yac?: number | null
          avg_yac_above_expectation?: number | null
          catch_percentage?: number | null
          percent_share_of_intended_air_yards?: number | null
          player_display_name: string
          player_first_name?: string | null
          player_gsis_id?: string | null
          player_jersey_number?: number | null
          player_last_name?: string | null
          player_position: string
          player_short_name?: string | null
          rec_touchdowns?: number | null
          receptions?: number | null
          season: number
          season_type?: string | null
          targets?: number | null
          team_abbr: string
          week: number
          yards?: number | null
        }
        Update: {
          avg_cushion?: number | null
          avg_expected_yac?: number | null
          avg_intended_air_yards?: number | null
          avg_separation?: number | null
          avg_yac?: number | null
          avg_yac_above_expectation?: number | null
          catch_percentage?: number | null
          percent_share_of_intended_air_yards?: number | null
          player_display_name?: string
          player_first_name?: string | null
          player_gsis_id?: string | null
          player_jersey_number?: number | null
          player_last_name?: string | null
          player_position?: string
          player_short_name?: string | null
          rec_touchdowns?: number | null
          receptions?: number | null
          season?: number
          season_type?: string | null
          targets?: number | null
          team_abbr?: string
          week?: number
          yards?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_nextgen_stats_rushing: {
        Row: {
          avg_rush_yards: number | null
          avg_time_to_los: number | null
          efficiency: number | null
          expected_rush_yards: number | null
          percent_attempts_gte_eight_defenders: number | null
          player_display_name: string
          player_first_name: string | null
          player_gsis_id: string | null
          player_jersey_number: number | null
          player_last_name: string | null
          player_position: string
          player_short_name: string | null
          rush_attempts: number | null
          rush_pct_over_expected: number | null
          rush_touchdowns: number | null
          rush_yards: number | null
          rush_yards_over_expected: number | null
          rush_yards_over_expected_per_att: number | null
          season: number
          season_type: string | null
          team_abbr: string
          week: number
        }
        Insert: {
          avg_rush_yards?: number | null
          avg_time_to_los?: number | null
          efficiency?: number | null
          expected_rush_yards?: number | null
          percent_attempts_gte_eight_defenders?: number | null
          player_display_name: string
          player_first_name?: string | null
          player_gsis_id?: string | null
          player_jersey_number?: number | null
          player_last_name?: string | null
          player_position: string
          player_short_name?: string | null
          rush_attempts?: number | null
          rush_pct_over_expected?: number | null
          rush_touchdowns?: number | null
          rush_yards?: number | null
          rush_yards_over_expected?: number | null
          rush_yards_over_expected_per_att?: number | null
          season: number
          season_type?: string | null
          team_abbr: string
          week: number
        }
        Update: {
          avg_rush_yards?: number | null
          avg_time_to_los?: number | null
          efficiency?: number | null
          expected_rush_yards?: number | null
          percent_attempts_gte_eight_defenders?: number | null
          player_display_name?: string
          player_first_name?: string | null
          player_gsis_id?: string | null
          player_jersey_number?: number | null
          player_last_name?: string | null
          player_position?: string
          player_short_name?: string | null
          rush_attempts?: number | null
          rush_pct_over_expected?: number | null
          rush_touchdowns?: number | null
          rush_yards?: number | null
          rush_yards_over_expected?: number | null
          rush_yards_over_expected_per_att?: number | null
          season?: number
          season_type?: string | null
          team_abbr?: string
          week?: number
        }
        Relationships: []
      }
      nflreadr_nfl_player_stats: {
        Row: {
          air_yards_share: number | null
          attempts: number | null
          carries: number | null
          completions: number | null
          dakota: number | null
          fantasy_points: number | null
          fantasy_points_ppr: number | null
          headshot_url: string | null
          interceptions: number | null
          opponent_team: string | null
          pacr: number | null
          passing_2pt_conversions: number | null
          passing_air_yards: number | null
          passing_epa: number | null
          passing_first_downs: number | null
          passing_tds: number | null
          passing_yards: number | null
          passing_yards_after_catch: number | null
          player_display_name: string
          player_id: string | null
          player_name: string | null
          position: string
          position_group: string | null
          racr: number | null
          receiving_2pt_conversions: number | null
          receiving_air_yards: number | null
          receiving_epa: number | null
          receiving_first_downs: number | null
          receiving_fumbles: number | null
          receiving_fumbles_lost: number | null
          receiving_tds: number | null
          receiving_yards: number | null
          receiving_yards_after_catch: number | null
          recent_team: string
          receptions: number | null
          rushing_2pt_conversions: number | null
          rushing_epa: number | null
          rushing_first_downs: number | null
          rushing_fumbles: number | null
          rushing_fumbles_lost: number | null
          rushing_tds: number | null
          rushing_yards: number | null
          sack_fumbles: number | null
          sack_fumbles_lost: number | null
          sack_yards: number | null
          sacks: number | null
          season: number
          season_type: string | null
          special_teams_tds: number | null
          target_share: number | null
          targets: number | null
          week: number
          wopr: number | null
        }
        Insert: {
          air_yards_share?: number | null
          attempts?: number | null
          carries?: number | null
          completions?: number | null
          dakota?: number | null
          fantasy_points?: number | null
          fantasy_points_ppr?: number | null
          headshot_url?: string | null
          interceptions?: number | null
          opponent_team?: string | null
          pacr?: number | null
          passing_2pt_conversions?: number | null
          passing_air_yards?: number | null
          passing_epa?: number | null
          passing_first_downs?: number | null
          passing_tds?: number | null
          passing_yards?: number | null
          passing_yards_after_catch?: number | null
          player_display_name: string
          player_id?: string | null
          player_name?: string | null
          position: string
          position_group?: string | null
          racr?: number | null
          receiving_2pt_conversions?: number | null
          receiving_air_yards?: number | null
          receiving_epa?: number | null
          receiving_first_downs?: number | null
          receiving_fumbles?: number | null
          receiving_fumbles_lost?: number | null
          receiving_tds?: number | null
          receiving_yards?: number | null
          receiving_yards_after_catch?: number | null
          recent_team: string
          receptions?: number | null
          rushing_2pt_conversions?: number | null
          rushing_epa?: number | null
          rushing_first_downs?: number | null
          rushing_fumbles?: number | null
          rushing_fumbles_lost?: number | null
          rushing_tds?: number | null
          rushing_yards?: number | null
          sack_fumbles?: number | null
          sack_fumbles_lost?: number | null
          sack_yards?: number | null
          sacks?: number | null
          season: number
          season_type?: string | null
          special_teams_tds?: number | null
          target_share?: number | null
          targets?: number | null
          week: number
          wopr?: number | null
        }
        Update: {
          air_yards_share?: number | null
          attempts?: number | null
          carries?: number | null
          completions?: number | null
          dakota?: number | null
          fantasy_points?: number | null
          fantasy_points_ppr?: number | null
          headshot_url?: string | null
          interceptions?: number | null
          opponent_team?: string | null
          pacr?: number | null
          passing_2pt_conversions?: number | null
          passing_air_yards?: number | null
          passing_epa?: number | null
          passing_first_downs?: number | null
          passing_tds?: number | null
          passing_yards?: number | null
          passing_yards_after_catch?: number | null
          player_display_name?: string
          player_id?: string | null
          player_name?: string | null
          position?: string
          position_group?: string | null
          racr?: number | null
          receiving_2pt_conversions?: number | null
          receiving_air_yards?: number | null
          receiving_epa?: number | null
          receiving_first_downs?: number | null
          receiving_fumbles?: number | null
          receiving_fumbles_lost?: number | null
          receiving_tds?: number | null
          receiving_yards?: number | null
          receiving_yards_after_catch?: number | null
          recent_team?: string
          receptions?: number | null
          rushing_2pt_conversions?: number | null
          rushing_epa?: number | null
          rushing_first_downs?: number | null
          rushing_fumbles?: number | null
          rushing_fumbles_lost?: number | null
          rushing_tds?: number | null
          rushing_yards?: number | null
          sack_fumbles?: number | null
          sack_fumbles_lost?: number | null
          sack_yards?: number | null
          sacks?: number | null
          season?: number
          season_type?: string | null
          special_teams_tds?: number | null
          target_share?: number | null
          targets?: number | null
          week?: number
          wopr?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_players: {
        Row: {
          birth_date: string | null
          college_conference: string | null
          college_name: string | null
          common_first_name: string | null
          display_name: string
          draft_pick: number | null
          draft_round: number | null
          draft_team: string | null
          draft_year: number | null
          esb_id: string | null
          espn_id: number | null
          first_name: string | null
          football_name: string | null
          gsis_id: string | null
          headshot: string | null
          height: number | null
          jersey_number: number | null
          last_name: string | null
          last_season: number | null
          latest_team: string
          nfl_id: number | null
          ngs_position: string | null
          ngs_position_group: string | null
          ngs_status: string | null
          ngs_status_short_description: string | null
          otc_id: number | null
          pff_id: number | null
          pff_position: string | null
          pff_status: string | null
          pfr_id: string | null
          position: string
          position_group: string | null
          rookie_season: number | null
          short_name: string | null
          smart_id: string | null
          status: string | null
          suffix: string | null
          weight: number | null
          years_of_experience: number | null
        }
        Insert: {
          birth_date?: string | null
          college_conference?: string | null
          college_name?: string | null
          common_first_name?: string | null
          display_name: string
          draft_pick?: number | null
          draft_round?: number | null
          draft_team?: string | null
          draft_year?: number | null
          esb_id?: string | null
          espn_id?: number | null
          first_name?: string | null
          football_name?: string | null
          gsis_id?: string | null
          headshot?: string | null
          height?: number | null
          jersey_number?: number | null
          last_name?: string | null
          last_season?: number | null
          latest_team: string
          nfl_id?: number | null
          ngs_position?: string | null
          ngs_position_group?: string | null
          ngs_status?: string | null
          ngs_status_short_description?: string | null
          otc_id?: number | null
          pff_id?: number | null
          pff_position?: string | null
          pff_status?: string | null
          pfr_id?: string | null
          position: string
          position_group?: string | null
          rookie_season?: number | null
          short_name?: string | null
          smart_id?: string | null
          status?: string | null
          suffix?: string | null
          weight?: number | null
          years_of_experience?: number | null
        }
        Update: {
          birth_date?: string | null
          college_conference?: string | null
          college_name?: string | null
          common_first_name?: string | null
          display_name?: string
          draft_pick?: number | null
          draft_round?: number | null
          draft_team?: string | null
          draft_year?: number | null
          esb_id?: string | null
          espn_id?: number | null
          first_name?: string | null
          football_name?: string | null
          gsis_id?: string | null
          headshot?: string | null
          height?: number | null
          jersey_number?: number | null
          last_name?: string | null
          last_season?: number | null
          latest_team?: string
          nfl_id?: number | null
          ngs_position?: string | null
          ngs_position_group?: string | null
          ngs_status?: string | null
          ngs_status_short_description?: string | null
          otc_id?: number | null
          pff_id?: number | null
          pff_position?: string | null
          pff_status?: string | null
          pfr_id?: string | null
          position?: string
          position_group?: string | null
          rookie_season?: number | null
          short_name?: string | null
          smart_id?: string | null
          status?: string | null
          suffix?: string | null
          weight?: number | null
          years_of_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nflreadr_nfl_players_latest_team_fkey"
            columns: ["latest_team"]
            isOneToOne: false
            referencedRelation: "nflreadr_nfl_teams"
            referencedColumns: ["team_abbr"]
          },
        ]
      }
      nflreadr_nfl_rosters: {
        Row: {
          birth_date: string | null
          college: string | null
          depth_chart_position: string | null
          draft_club: string | null
          draft_number: number | null
          entry_year: number | null
          esb_id: string | null
          espn_id: number | null
          fantasy_data_id: number | null
          first_name: string | null
          football_name: string
          full_name: string
          game_type: number | null
          gsis_id: string | null
          gsis_it_id: number | null
          headshot_url: string | null
          height: number | null
          jersey_number: number | null
          last_name: string | null
          ngs_position: number | null
          pff_id: number | null
          pfr_id: string | null
          position: string
          rookie_year: number | null
          rotowire_id: number | null
          season: number
          sleeper_id: number | null
          smart_id: string | null
          sportradar_id: string | null
          status: string | null
          status_description_abbr: string | null
          team: string
          week: number | null
          weight: number | null
          yahoo_id: number | null
          years_exp: number | null
        }
        Insert: {
          birth_date?: string | null
          college?: string | null
          depth_chart_position?: string | null
          draft_club?: string | null
          draft_number?: number | null
          entry_year?: number | null
          esb_id?: string | null
          espn_id?: number | null
          fantasy_data_id?: number | null
          first_name?: string | null
          football_name: string
          full_name: string
          game_type?: number | null
          gsis_id?: string | null
          gsis_it_id?: number | null
          headshot_url?: string | null
          height?: number | null
          jersey_number?: number | null
          last_name?: string | null
          ngs_position?: number | null
          pff_id?: number | null
          pfr_id?: string | null
          position: string
          rookie_year?: number | null
          rotowire_id?: number | null
          season: number
          sleeper_id?: number | null
          smart_id?: string | null
          sportradar_id?: string | null
          status?: string | null
          status_description_abbr?: string | null
          team: string
          week?: number | null
          weight?: number | null
          yahoo_id?: number | null
          years_exp?: number | null
        }
        Update: {
          birth_date?: string | null
          college?: string | null
          depth_chart_position?: string | null
          draft_club?: string | null
          draft_number?: number | null
          entry_year?: number | null
          esb_id?: string | null
          espn_id?: number | null
          fantasy_data_id?: number | null
          first_name?: string | null
          football_name?: string
          full_name?: string
          game_type?: number | null
          gsis_id?: string | null
          gsis_it_id?: number | null
          headshot_url?: string | null
          height?: number | null
          jersey_number?: number | null
          last_name?: string | null
          ngs_position?: number | null
          pff_id?: number | null
          pfr_id?: string | null
          position?: string
          rookie_year?: number | null
          rotowire_id?: number | null
          season?: number
          sleeper_id?: number | null
          smart_id?: string | null
          sportradar_id?: string | null
          status?: string | null
          status_description_abbr?: string | null
          team?: string
          week?: number | null
          weight?: number | null
          yahoo_id?: number | null
          years_exp?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_rosters_weekly: {
        Row: {
          birth_date: string | null
          college: string | null
          depth_chart_position: string | null
          draft_club: string | null
          draft_number: number | null
          entry_year: number | null
          esb_id: string | null
          espn_id: number | null
          fantasy_data_id: number | null
          first_name: string | null
          football_name: string
          full_name: string
          game_type: number | null
          gsis_id: string | null
          gsis_it_id: number | null
          headshot_url: string | null
          height: number | null
          jersey_number: number | null
          last_name: string | null
          ngs_position: number | null
          pff_id: number | null
          pfr_id: string | null
          position: string
          rookie_year: number | null
          rotowire_id: number | null
          season: number
          sleeper_id: number | null
          smart_id: string | null
          sportradar_id: string | null
          status: string | null
          status_description_abbr: string | null
          team: string
          week: number | null
          weight: number | null
          yahoo_id: number | null
          years_exp: number | null
        }
        Insert: {
          birth_date?: string | null
          college?: string | null
          depth_chart_position?: string | null
          draft_club?: string | null
          draft_number?: number | null
          entry_year?: number | null
          esb_id?: string | null
          espn_id?: number | null
          fantasy_data_id?: number | null
          first_name?: string | null
          football_name: string
          full_name: string
          game_type?: number | null
          gsis_id?: string | null
          gsis_it_id?: number | null
          headshot_url?: string | null
          height?: number | null
          jersey_number?: number | null
          last_name?: string | null
          ngs_position?: number | null
          pff_id?: number | null
          pfr_id?: string | null
          position: string
          rookie_year?: number | null
          rotowire_id?: number | null
          season: number
          sleeper_id?: number | null
          smart_id?: string | null
          sportradar_id?: string | null
          status?: string | null
          status_description_abbr?: string | null
          team: string
          week?: number | null
          weight?: number | null
          yahoo_id?: number | null
          years_exp?: number | null
        }
        Update: {
          birth_date?: string | null
          college?: string | null
          depth_chart_position?: string | null
          draft_club?: string | null
          draft_number?: number | null
          entry_year?: number | null
          esb_id?: string | null
          espn_id?: number | null
          fantasy_data_id?: number | null
          first_name?: string | null
          football_name?: string
          full_name?: string
          game_type?: number | null
          gsis_id?: string | null
          gsis_it_id?: number | null
          headshot_url?: string | null
          height?: number | null
          jersey_number?: number | null
          last_name?: string | null
          ngs_position?: number | null
          pff_id?: number | null
          pfr_id?: string | null
          position?: string
          rookie_year?: number | null
          rotowire_id?: number | null
          season?: number
          sleeper_id?: number | null
          smart_id?: string | null
          sportradar_id?: string | null
          status?: string | null
          status_description_abbr?: string | null
          team?: string
          week?: number | null
          weight?: number | null
          yahoo_id?: number | null
          years_exp?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_schedules: {
        Row: {
          away_coach: string | null
          away_moneyline: number | null
          away_qb_id: string | null
          away_qb_name: string | null
          away_rest: number | null
          away_score: number | null
          away_spread_odds: number | null
          away_team: string
          div_game: number | null
          espn: number | null
          ftn: number | null
          game_id: string | null
          game_type: string | null
          gameday: string | null
          gametime: string | null
          gsis: number | null
          home_coach: string | null
          home_moneyline: number | null
          home_qb_id: string | null
          home_qb_name: string | null
          home_rest: number | null
          home_score: number | null
          home_spread_odds: number | null
          home_team: string
          location: string | null
          nfl_detail_id: string | null
          old_game_id: number | null
          over_odds: number | null
          overtime: number | null
          pff: number | null
          pfr: string | null
          referee: string | null
          result: number | null
          roof: string | null
          season: number
          spread_line: number | null
          stadium: string | null
          stadium_id: string | null
          surface: string | null
          temp: number | null
          total: number | null
          total_line: number | null
          under_odds: number | null
          week: number
          weekday: string | null
          wind: number | null
        }
        Insert: {
          away_coach?: string | null
          away_moneyline?: number | null
          away_qb_id?: string | null
          away_qb_name?: string | null
          away_rest?: number | null
          away_score?: number | null
          away_spread_odds?: number | null
          away_team: string
          div_game?: number | null
          espn?: number | null
          ftn?: number | null
          game_id?: string | null
          game_type?: string | null
          gameday?: string | null
          gametime?: string | null
          gsis?: number | null
          home_coach?: string | null
          home_moneyline?: number | null
          home_qb_id?: string | null
          home_qb_name?: string | null
          home_rest?: number | null
          home_score?: number | null
          home_spread_odds?: number | null
          home_team: string
          location?: string | null
          nfl_detail_id?: string | null
          old_game_id?: number | null
          over_odds?: number | null
          overtime?: number | null
          pff?: number | null
          pfr?: string | null
          referee?: string | null
          result?: number | null
          roof?: string | null
          season: number
          spread_line?: number | null
          stadium?: string | null
          stadium_id?: string | null
          surface?: string | null
          temp?: number | null
          total?: number | null
          total_line?: number | null
          under_odds?: number | null
          week: number
          weekday?: string | null
          wind?: number | null
        }
        Update: {
          away_coach?: string | null
          away_moneyline?: number | null
          away_qb_id?: string | null
          away_qb_name?: string | null
          away_rest?: number | null
          away_score?: number | null
          away_spread_odds?: number | null
          away_team?: string
          div_game?: number | null
          espn?: number | null
          ftn?: number | null
          game_id?: string | null
          game_type?: string | null
          gameday?: string | null
          gametime?: string | null
          gsis?: number | null
          home_coach?: string | null
          home_moneyline?: number | null
          home_qb_id?: string | null
          home_qb_name?: string | null
          home_rest?: number | null
          home_score?: number | null
          home_spread_odds?: number | null
          home_team?: string
          location?: string | null
          nfl_detail_id?: string | null
          old_game_id?: number | null
          over_odds?: number | null
          overtime?: number | null
          pff?: number | null
          pfr?: string | null
          referee?: string | null
          result?: number | null
          roof?: string | null
          season?: number
          spread_line?: number | null
          stadium?: string | null
          stadium_id?: string | null
          surface?: string | null
          temp?: number | null
          total?: number | null
          total_line?: number | null
          under_odds?: number | null
          week?: number
          weekday?: string | null
          wind?: number | null
        }
        Relationships: []
      }
      nflreadr_nfl_seasonal_data: {
        Row: {
          air_yards_share: string | null
          attempts: string | null
          ay_sh: string | null
          carries: string | null
          completions: string | null
          dakota: string | null
          dom: string | null
          fantasy_points: number | null
          fantasy_points_ppr: number | null
          games: number | null
          interceptions: string | null
          pacr: string | null
          passing_2pt_conversions: string | null
          passing_air_yards: string | null
          passing_epa: string | null
          passing_first_downs: string | null
          passing_tds: string | null
          passing_yards: string | null
          passing_yards_after_catch: string | null
          player_id: string | null
          ppr_sh: number | null
          racr: string | null
          receiving_2pt_conversions: string | null
          receiving_air_yards: string | null
          receiving_epa: string | null
          receiving_first_downs: string | null
          receiving_fumbles: string | null
          receiving_fumbles_lost: string | null
          receiving_tds: string | null
          receiving_yards: string | null
          receiving_yards_after_catch: string | null
          receptions: string | null
          rfd_sh: string | null
          rtd_sh: string | null
          rtdfd_sh: string | null
          rushing_2pt_conversions: string | null
          rushing_epa: string | null
          rushing_first_downs: string | null
          rushing_fumbles: string | null
          rushing_fumbles_lost: string | null
          rushing_tds: string | null
          rushing_yards: string | null
          ry_sh: string | null
          sack_fumbles: string | null
          sack_fumbles_lost: string | null
          sack_yards: string | null
          sacks: string | null
          season: number | null
          season_type: string | null
          special_teams_tds: string | null
          target_share: string | null
          targets: string | null
          tgt_sh: string | null
          w8dom: string | null
          wopr_x: string | null
          wopr_y: string | null
          yac_sh: string | null
          yptmpa: string | null
        }
        Insert: {
          air_yards_share?: string | null
          attempts?: string | null
          ay_sh?: string | null
          carries?: string | null
          completions?: string | null
          dakota?: string | null
          dom?: string | null
          fantasy_points?: number | null
          fantasy_points_ppr?: number | null
          games?: number | null
          interceptions?: string | null
          pacr?: string | null
          passing_2pt_conversions?: string | null
          passing_air_yards?: string | null
          passing_epa?: string | null
          passing_first_downs?: string | null
          passing_tds?: string | null
          passing_yards?: string | null
          passing_yards_after_catch?: string | null
          player_id?: string | null
          ppr_sh?: number | null
          racr?: string | null
          receiving_2pt_conversions?: string | null
          receiving_air_yards?: string | null
          receiving_epa?: string | null
          receiving_first_downs?: string | null
          receiving_fumbles?: string | null
          receiving_fumbles_lost?: string | null
          receiving_tds?: string | null
          receiving_yards?: string | null
          receiving_yards_after_catch?: string | null
          receptions?: string | null
          rfd_sh?: string | null
          rtd_sh?: string | null
          rtdfd_sh?: string | null
          rushing_2pt_conversions?: string | null
          rushing_epa?: string | null
          rushing_first_downs?: string | null
          rushing_fumbles?: string | null
          rushing_fumbles_lost?: string | null
          rushing_tds?: string | null
          rushing_yards?: string | null
          ry_sh?: string | null
          sack_fumbles?: string | null
          sack_fumbles_lost?: string | null
          sack_yards?: string | null
          sacks?: string | null
          season?: number | null
          season_type?: string | null
          special_teams_tds?: string | null
          target_share?: string | null
          targets?: string | null
          tgt_sh?: string | null
          w8dom?: string | null
          wopr_x?: string | null
          wopr_y?: string | null
          yac_sh?: string | null
          yptmpa?: string | null
        }
        Update: {
          air_yards_share?: string | null
          attempts?: string | null
          ay_sh?: string | null
          carries?: string | null
          completions?: string | null
          dakota?: string | null
          dom?: string | null
          fantasy_points?: number | null
          fantasy_points_ppr?: number | null
          games?: number | null
          interceptions?: string | null
          pacr?: string | null
          passing_2pt_conversions?: string | null
          passing_air_yards?: string | null
          passing_epa?: string | null
          passing_first_downs?: string | null
          passing_tds?: string | null
          passing_yards?: string | null
          passing_yards_after_catch?: string | null
          player_id?: string | null
          ppr_sh?: number | null
          racr?: string | null
          receiving_2pt_conversions?: string | null
          receiving_air_yards?: string | null
          receiving_epa?: string | null
          receiving_first_downs?: string | null
          receiving_fumbles?: string | null
          receiving_fumbles_lost?: string | null
          receiving_tds?: string | null
          receiving_yards?: string | null
          receiving_yards_after_catch?: string | null
          receptions?: string | null
          rfd_sh?: string | null
          rtd_sh?: string | null
          rtdfd_sh?: string | null
          rushing_2pt_conversions?: string | null
          rushing_epa?: string | null
          rushing_first_downs?: string | null
          rushing_fumbles?: string | null
          rushing_fumbles_lost?: string | null
          rushing_tds?: string | null
          rushing_yards?: string | null
          ry_sh?: string | null
          sack_fumbles?: string | null
          sack_fumbles_lost?: string | null
          sack_yards?: string | null
          sacks?: string | null
          season?: number | null
          season_type?: string | null
          special_teams_tds?: string | null
          target_share?: string | null
          targets?: string | null
          tgt_sh?: string | null
          w8dom?: string | null
          wopr_x?: string | null
          wopr_y?: string | null
          yac_sh?: string | null
          yptmpa?: string | null
        }
        Relationships: []
      }
      nflreadr_nfl_snap_counts: {
        Row: {
          defense_pct: number | null
          defense_snaps: number | null
          game_id: string | null
          game_type: string | null
          offense_pct: number | null
          offense_snaps: number | null
          opponent: string | null
          pfr_game_id: string | null
          pfr_player_id: string | null
          player: string
          position: string | null
          season: number
          st_pct: number | null
          st_snaps: number | null
          team: string
          week: number
        }
        Insert: {
          defense_pct?: number | null
          defense_snaps?: number | null
          game_id?: string | null
          game_type?: string | null
          offense_pct?: number | null
          offense_snaps?: number | null
          opponent?: string | null
          pfr_game_id?: string | null
          pfr_player_id?: string | null
          player: string
          position?: string | null
          season: number
          st_pct?: number | null
          st_snaps?: number | null
          team: string
          week: number
        }
        Update: {
          defense_pct?: number | null
          defense_snaps?: number | null
          game_id?: string | null
          game_type?: string | null
          offense_pct?: number | null
          offense_snaps?: number | null
          opponent?: string | null
          pfr_game_id?: string | null
          pfr_player_id?: string | null
          player?: string
          position?: string | null
          season?: number
          st_pct?: number | null
          st_snaps?: number | null
          team?: string
          week?: number
        }
        Relationships: []
      }
      nflreadr_nfl_teams: {
        Row: {
          team_abbr: string
          team_color: string | null
          team_color2: string | null
          team_color3: string | null
          team_color4: string | null
          team_conf: string | null
          team_conference_logo: string | null
          team_division: string | null
          team_id: number
          team_league_logo: string | null
          team_logo_espn: string | null
          team_logo_squared: string | null
          team_logo_wikipedia: string | null
          team_name: string
          team_nick: string | null
          team_wordmark: string | null
        }
        Insert: {
          team_abbr: string
          team_color?: string | null
          team_color2?: string | null
          team_color3?: string | null
          team_color4?: string | null
          team_conf?: string | null
          team_conference_logo?: string | null
          team_division?: string | null
          team_id: number
          team_league_logo?: string | null
          team_logo_espn?: string | null
          team_logo_squared?: string | null
          team_logo_wikipedia?: string | null
          team_name: string
          team_nick?: string | null
          team_wordmark?: string | null
        }
        Update: {
          team_abbr?: string
          team_color?: string | null
          team_color2?: string | null
          team_color3?: string | null
          team_color4?: string | null
          team_conf?: string | null
          team_conference_logo?: string | null
          team_division?: string | null
          team_id?: number
          team_league_logo?: string | null
          team_logo_espn?: string | null
          team_logo_squared?: string | null
          team_logo_wikipedia?: string | null
          team_name?: string
          team_nick?: string | null
          team_wordmark?: string | null
        }
        Relationships: []
      }
      nflreadr_nfl_trades: {
        Row: {
          conditional: number
          gave: string
          pfr_id: string
          pfr_name: string
          pick_number: number
          pick_round: number
          pick_season: number
          received: string
          season: number
          trade_date: string
          trade_id: number
        }
        Insert: {
          conditional?: number
          gave?: string
          pfr_id?: string
          pfr_name?: string
          pick_number?: number
          pick_round?: number
          pick_season?: number
          received?: string
          season?: number
          trade_date?: string
          trade_id?: number
        }
        Update: {
          conditional?: number
          gave?: string
          pfr_id?: string
          pfr_name?: string
          pick_number?: number
          pick_round?: number
          pick_season?: number
          received?: string
          season?: number
          trade_date?: string
          trade_id?: number
        }
        Relationships: []
      }
      sleeper_league_test: {
        Row: {
          co_owners: Json | null
          keepers: Json | null
          league_id: string | null
          metadata: Json | null
          owner_id: string
          player_map: Json | null
          players: Json | null
          reserve: Json | null
          roster_id: number | null
          settings: Json | null
          starters: Json | null
          taxi: Json | null
        }
        Insert: {
          co_owners?: Json | null
          keepers?: Json | null
          league_id?: string | null
          metadata?: Json | null
          owner_id: string
          player_map?: Json | null
          players?: Json | null
          reserve?: Json | null
          roster_id?: number | null
          settings?: Json | null
          starters?: Json | null
          taxi?: Json | null
        }
        Update: {
          co_owners?: Json | null
          keepers?: Json | null
          league_id?: string | null
          metadata?: Json | null
          owner_id?: string
          player_map?: Json | null
          players?: Json | null
          reserve?: Json | null
          roster_id?: number | null
          settings?: Json | null
          starters?: Json | null
          taxi?: Json | null
        }
        Relationships: []
      }
      voltagent_memory_agent_history: {
        Row: {
          agent_id: string
          conversation_id: string | null
          id: string
          input: Json | null
          key: string | null
          metadata: Json | null
          output: Json | null
          status: string | null
          timestamp: string
          usage: Json | null
          user_id: string | null
          value: Json | null
        }
        Insert: {
          agent_id: string
          conversation_id?: string | null
          id: string
          input?: Json | null
          key?: string | null
          metadata?: Json | null
          output?: Json | null
          status?: string | null
          timestamp: string
          usage?: Json | null
          user_id?: string | null
          value?: Json | null
        }
        Update: {
          agent_id?: string
          conversation_id?: string | null
          id?: string
          input?: Json | null
          key?: string | null
          metadata?: Json | null
          output?: Json | null
          status?: string | null
          timestamp?: string
          usage?: Json | null
          user_id?: string | null
          value?: Json | null
        }
        Relationships: []
      }
      voltagent_memory_agent_history_steps: {
        Row: {
          agent_id: string
          history_id: string
          key: string
          value: Json
        }
        Insert: {
          agent_id: string
          history_id: string
          key: string
          value: Json
        }
        Update: {
          agent_id?: string
          history_id?: string
          key?: string
          value?: Json
        }
        Relationships: []
      }
      voltagent_memory_agent_history_timeline_events: {
        Row: {
          agent_id: string | null
          created_at: string | null
          end_time: string | null
          error: Json | null
          event_name: string
          event_type: string
          history_id: string
          id: string
          input: Json | null
          level: string | null
          metadata: Json | null
          output: Json | null
          parent_event_id: string | null
          start_time: string
          status: string | null
          status_message: string | null
          tags: Json | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          agent_id?: string | null
          created_at?: string | null
          end_time?: string | null
          error?: Json | null
          event_name: string
          event_type: string
          history_id: string
          id: string
          input?: Json | null
          level?: string | null
          metadata?: Json | null
          output?: Json | null
          parent_event_id?: string | null
          start_time: string
          status?: string | null
          status_message?: string | null
          tags?: Json | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          agent_id?: string | null
          created_at?: string | null
          end_time?: string | null
          error?: Json | null
          event_name?: string
          event_type?: string
          history_id?: string
          id?: string
          input?: Json | null
          level?: string | null
          metadata?: Json | null
          output?: Json | null
          parent_event_id?: string | null
          start_time?: string
          status?: string | null
          status_message?: string | null
          tags?: Json | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: []
      }
      voltagent_memory_conversations: {
        Row: {
          created_at: string
          id: string
          metadata: Json | null
          resource_id: string
          title: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id: string
          metadata?: Json | null
          resource_id: string
          title?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          metadata?: Json | null
          resource_id?: string
          title?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      voltagent_memory_conversations_migration_flags: {
        Row: {
          completed_at: string
          id: number
          metadata: Json | null
          migrated_count: number | null
          migration_type: string
        }
        Insert: {
          completed_at?: string
          id?: number
          metadata?: Json | null
          migrated_count?: number | null
          migration_type: string
        }
        Update: {
          completed_at?: string
          id?: number
          metadata?: Json | null
          migrated_count?: number | null
          migration_type?: string
        }
        Relationships: []
      }
      voltagent_memory_messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          message_id: string
          role: string
          type: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          message_id: string
          role: string
          type: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          message_id?: string
          role?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "voltagent_memory_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "voltagent_memory_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      voltagent_memory_workflow_history: {
        Row: {
          conversation_id: string | null
          created_at: string
          end_time: string | null
          id: string
          input: Json | null
          metadata: Json | null
          name: string
          output: Json | null
          start_time: string
          status: string
          updated_at: string
          user_id: string | null
          workflow_id: string
        }
        Insert: {
          conversation_id?: string | null
          created_at?: string
          end_time?: string | null
          id: string
          input?: Json | null
          metadata?: Json | null
          name: string
          output?: Json | null
          start_time: string
          status: string
          updated_at?: string
          user_id?: string | null
          workflow_id: string
        }
        Update: {
          conversation_id?: string | null
          created_at?: string
          end_time?: string | null
          id?: string
          input?: Json | null
          metadata?: Json | null
          name?: string
          output?: Json | null
          start_time?: string
          status?: string
          updated_at?: string
          user_id?: string | null
          workflow_id?: string
        }
        Relationships: []
      }
      voltagent_memory_workflow_steps: {
        Row: {
          agent_execution_id: string | null
          created_at: string
          end_time: string | null
          error_message: string | null
          id: string
          input: Json | null
          output: Json | null
          start_time: string
          status: string
          step_index: number
          step_name: string
          step_type: string
          updated_at: string
          workflow_history_id: string
        }
        Insert: {
          agent_execution_id?: string | null
          created_at?: string
          end_time?: string | null
          error_message?: string | null
          id: string
          input?: Json | null
          output?: Json | null
          start_time: string
          status: string
          step_index: number
          step_name: string
          step_type: string
          updated_at?: string
          workflow_history_id: string
        }
        Update: {
          agent_execution_id?: string | null
          created_at?: string
          end_time?: string | null
          error_message?: string | null
          id?: string
          input?: Json | null
          output?: Json | null
          start_time?: string
          status?: string
          step_index?: number
          step_name?: string
          step_type?: string
          updated_at?: string
          workflow_history_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "voltagent_memory_workflow_steps_workflow_history_id_fkey"
            columns: ["workflow_history_id"]
            isOneToOne: false
            referencedRelation: "voltagent_memory_workflow_history"
            referencedColumns: ["id"]
          },
        ]
      }
      voltagent_memory_workflow_timeline_events: {
        Row: {
          created_at: string
          end_time: string | null
          event_id: string
          event_sequence: number | null
          id: string
          input: Json | null
          level: string | null
          metadata: Json | null
          name: string
          output: Json | null
          parent_event_id: string | null
          start_time: string
          status: string | null
          status_message: string | null
          trace_id: string | null
          type: string
          workflow_history_id: string
        }
        Insert: {
          created_at?: string
          end_time?: string | null
          event_id: string
          event_sequence?: number | null
          id: string
          input?: Json | null
          level?: string | null
          metadata?: Json | null
          name: string
          output?: Json | null
          parent_event_id?: string | null
          start_time: string
          status?: string | null
          status_message?: string | null
          trace_id?: string | null
          type: string
          workflow_history_id: string
        }
        Update: {
          created_at?: string
          end_time?: string | null
          event_id?: string
          event_sequence?: number | null
          id?: string
          input?: Json | null
          level?: string | null
          metadata?: Json | null
          name?: string
          output?: Json | null
          parent_event_id?: string | null
          start_time?: string
          status?: string | null
          status_message?: string | null
          trace_id?: string | null
          type?: string
          workflow_history_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "voltagent_memory_workflow_timeline_eve_workflow_history_id_fkey"
            columns: ["workflow_history_id"]
            isOneToOne: false
            referencedRelation: "voltagent_memory_workflow_history"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      vw_advanced_def_analytics: {
        Row: {
          age: number | null
          air: number | null
          bltz: number | null
          cmp: number | null
          cmp_percent: number | null
          comb: number | null
          dadot: number | null
          g: number | null
          gs: number | null
          gsis_id: string | null
          height: number | null
          hrry: number | null
          int: number | null
          loaded: string | null
          m_tkl: number | null
          m_tkl_percent: number | null
          merge_name: string | null
          pfr_id: string | null
          player_name: string | null
          pos: string | null
          position: string | null
          prss: number | null
          qbkd: number | null
          rat: number | null
          season: number | null
          sk: number | null
          td: number | null
          team: string | null
          tgt: number | null
          weight: number | null
          yac: number | null
          yds: number | null
          yds_cmp: number | null
          yds_tgt: number | null
        }
        Relationships: []
      }
      vw_advanced_def_analytics_weekly: {
        Row: {
          def_adot: number | null
          def_air_yards_completed: number | null
          def_completion_pct: number | null
          def_completions_allowed: number | null
          def_ints: number | null
          def_missed_tackle_pct: number | null
          def_missed_tackles: number | null
          def_passer_rating_allowed: number | null
          def_pressures: number | null
          def_receiving_td_allowed: number | null
          def_sacks: number | null
          def_tackles_combined: number | null
          def_targets: number | null
          def_times_blitzed: number | null
          def_times_hitqb: number | null
          def_times_hurried: number | null
          def_yards_after_catch: number | null
          def_yards_allowed: number | null
          def_yards_allowed_per_cmp: number | null
          def_yards_allowed_per_tgt: number | null
          game_id: string | null
          game_type: string | null
          gsis_id: string | null
          height: number | null
          merge_name: string | null
          opponent: string | null
          pfr_game_id: string | null
          pfr_player_id: string | null
          pfr_player_name: string | null
          player_name: string | null
          position: string | null
          season: number | null
          team: string | null
          week: number | null
          weight: number | null
        }
        Relationships: []
      }
      vw_advanced_passing_analytics: {
        Row: {
          aggressiveness: number | null
          attempts: number | null
          avg_air_distance: number | null
          avg_air_yards_differential: number | null
          avg_air_yards_to_sticks: number | null
          avg_completed_air_yards: number | null
          avg_intended_air_yards: number | null
          avg_time_to_throw: number | null
          bad_throw_pct: number | null
          bad_throws: number | null
          batted_balls: number | null
          carries: number | null
          completion_percentage: number | null
          completion_percentage_above_expectation: number | null
          completions: number | null
          dakota: number | null
          drop_pct: number | null
          epa_total: number | null
          exp_sack: number | null
          expected_completion_percentage: number | null
          fantasy_points: number | null
          fantasy_points_ppr: number | null
          ff_position: string | null
          ff_team: string | null
          games: number | null
          gsis_id: string | null
          height: number | null
          interceptions: number | null
          max_air_distance: number | null
          max_completed_air_distance: number | null
          merge_name: string | null
          on_tgt_pct: number | null
          on_tgt_throws: number | null
          pa_pass_att: number | null
          pa_pass_yards: number | null
          pacr: number | null
          passer_rating: number | null
          passing_2pt_conversions: number | null
          passing_air_yards: number | null
          passing_epa: number | null
          passing_first_downs: number | null
          passing_tds: number | null
          passing_yards: number | null
          passing_yards_after_catch: number | null
          player_name: string | null
          pocket_time: number | null
          ppr_sh: number | null
          pressure_pct: number | null
          qb_plays: number | null
          qbr_rank: number | null
          qbr_raw: number | null
          qbr_total: number | null
          rpo_pass_att: number | null
          rpo_pass_yards: number | null
          rpo_plays: number | null
          rpo_rush_att: number | null
          rpo_rush_yards: number | null
          rpo_yards: number | null
          rushing_2pt_conversions: number | null
          rushing_epa: number | null
          rushing_first_downs: number | null
          rushing_fumbles: number | null
          rushing_fumbles_lost: number | null
          rushing_tds: number | null
          rushing_yards: number | null
          sack_fumbles: number | null
          sack_fumbles_lost: number | null
          sack_yards: number | null
          sacks: number | null
          season: number | null
          spikes: number | null
          throwaways: number | null
          times_blitzed: number | null
          times_hit: number | null
          times_hurried: number | null
          times_pressured: number | null
          weight: number | null
        }
        Relationships: []
      }
      vw_advanced_passing_analytics_weekly: {
        Row: {
          aggressiveness: number | null
          avg_air_distance: number | null
          avg_air_yards_differential: number | null
          avg_air_yards_to_sticks: number | null
          avg_completed_air_yards: number | null
          avg_intended_air_yards: number | null
          avg_time_to_throw: number | null
          completion_percentage: number | null
          completion_percentage_above_expectation: number | null
          def_times_blitzed: number | null
          def_times_hitqb: number | null
          def_times_hurried: number | null
          epa_total: number | null
          exp_sack: number | null
          expected_completion_percentage: number | null
          gsis_id: string | null
          height: number | null
          max_air_distance: number | null
          max_completed_air_distance: number | null
          merge_name: string | null
          passer_rating: number | null
          passing_bad_throw_pct: number | null
          passing_bad_throws: number | null
          passing_drop_pct: number | null
          passing_drops: number | null
          pfr_player_id: string | null
          pfr_player_name: string | null
          player_name: string | null
          position: string | null
          qb_plays: number | null
          qbr_rank: number | null
          qbr_raw: number | null
          qbr_total: number | null
          receiving_drop: number | null
          receiving_drop_pct: number | null
          season: number | null
          team: string | null
          times_blitzed: number | null
          times_hit: number | null
          times_hurried: number | null
          times_pressured: number | null
          times_pressured_pct: number | null
          times_sacked: number | null
          week: number | null
          weight: number | null
        }
        Relationships: []
      }
      vw_advanced_receiving_analytics: {
        Row: {
          adot: number | null
          age: number | null
          air_yards_share: number | null
          avg_cushion: number | null
          avg_expected_yac: number | null
          avg_intended_air_yards: number | null
          avg_separation: number | null
          avg_yac: number | null
          avg_yac_above_expectation: number | null
          ay_sh: number | null
          brk_tkl: number | null
          catch_percentage: number | null
          dom: number | null
          drop: number | null
          drop_percent: number | null
          fantasy_points: number | null
          fantasy_points_ppr: number | null
          ff_position: string | null
          ff_team: string | null
          games: number | null
          gs: number | null
          gsis_id: string | null
          height: number | null
          int: number | null
          merge_name: string | null
          ngr_position: string | null
          ngr_team: string | null
          percent_share_of_intended_air_yards: number | null
          player_display_name: string | null
          player_name: string | null
          ppr_sh: number | null
          racr: number | null
          rat: number | null
          rec_br: number | null
          receiving_2pt_conversions: number | null
          receiving_air_yards: number | null
          receiving_epa: number | null
          receiving_first_downs: number | null
          receiving_tds: number | null
          receiving_yards: number | null
          receiving_yards_after_catch: number | null
          receptions: number | null
          rfd_sh: number | null
          rtd_sh: number | null
          rtdfd_sh: number | null
          ry_sh: number | null
          season: number | null
          target_share: number | null
          targets: number | null
          td: number | null
          tgt_sh: number | null
          w8dom: number | null
          weight: number | null
          wopr_x: number | null
          wopr_y: number | null
          x1d: number | null
          yac_r: number | null
          yac_sh: number | null
          ybc: number | null
          ybc_r: number | null
          yds: number | null
          yptmpa: number | null
        }
        Relationships: []
      }
      vw_advanced_receiving_analytics_weekly: {
        Row: {
          avg_cushion: number | null
          avg_expected_yac: number | null
          avg_intended_air_yards: number | null
          avg_separation: number | null
          avg_yac: number | null
          avg_yac_above_expectation: number | null
          catch_percentage: number | null
          ff_position: string | null
          ff_team: string | null
          gsis_id: string | null
          height: number | null
          merge_name: string | null
          ngr_position: string | null
          ngr_team: string | null
          passing_drop_pct: number | null
          passing_drops: number | null
          percent_share_of_intended_air_yards: number | null
          player_display_name: string | null
          player_name: string | null
          receiving_broken_tackles: number | null
          receiving_drop: number | null
          receiving_drop_pct: number | null
          receiving_int: number | null
          receiving_rat: number | null
          rushing_broken_tackles: number | null
          season: number | null
          week: number | null
          weight: number | null
        }
        Relationships: []
      }
      vw_advanced_rushing_analytics: {
        Row: {
          age: number | null
          att: number | null
          att_br: number | null
          avg_rush_yards: number | null
          avg_time_to_los: number | null
          brk_tkl: number | null
          carries: number | null
          dom: number | null
          efficiency: number | null
          expected_rush_yards: number | null
          fantasy_points: number | null
          fantasy_points_ppr: number | null
          ff_position: string | null
          ff_team: string | null
          games: number | null
          gs: number | null
          gsis_id: string | null
          height: number | null
          merge_name: string | null
          percent_attempts_gte_eight_defenders: number | null
          player_name: string | null
          ppr_sh: number | null
          receiving_epa: number | null
          receiving_tds: number | null
          receiving_yards: number | null
          receiving_yards_after_catch: number | null
          receptions: number | null
          rush_attempts: number | null
          rush_pct_over_expected: number | null
          rush_touchdowns: number | null
          rush_yards_over_expected: number | null
          rush_yards_over_expected_per_att: number | null
          rushing_epa: number | null
          rushing_first_downs: number | null
          rushing_fumbles: number | null
          rushing_fumbles_lost: number | null
          rushing_tds: number | null
          rushing_yards: number | null
          ry_sh: number | null
          season: number | null
          target_share: number | null
          targets: number | null
          td: number | null
          tgt_sh: number | null
          w8dom: number | null
          weight: number | null
          x1d: number | null
          yac: number | null
          yac_att: number | null
          yac_sh: number | null
          ybc: number | null
          ybc_att: number | null
          yds: number | null
          yptmpa: number | null
        }
        Relationships: []
      }
      vw_advanced_rushing_analytics_weekly: {
        Row: {
          avg_rush_yards: number | null
          avg_time_to_los: number | null
          efficiency: number | null
          expected_rush_yards: number | null
          height: number | null
          merge_name: string | null
          percent_attempts_gte_eight_defenders: number | null
          player_id: string | null
          player_name: string | null
          position: string | null
          receiving_broken_tackles: number | null
          rush_attempts: number | null
          rush_pct_over_expected: number | null
          rush_touchdowns: number | null
          rush_yards_over_expected: number | null
          rush_yards_over_expected_per_att: number | null
          rushing_broken_tackles: number | null
          rushing_yards_after_contact: number | null
          rushing_yards_after_contact_avg: number | null
          rushing_yards_before_contact: number | null
          rushing_yards_before_contact_avg: number | null
          season: number | null
          team: string | null
          week: number | null
          weight: number | null
        }
        Relationships: []
      }
      vw_dictionary_combined: {
        Row: {
          description: string | null
          extra: Json | null
          field: string | null
          source_table: string | null
        }
        Relationships: []
      }
      vw_dynasty_ranks: {
        Row: {
          age: number | null
          best: number | null
          bye: number | null
          cbs_id: number | null
          ecr: number | null
          ecr_type: string | null
          fp_page: string | null
          id: number | null
          mergename: string | null
          page_type: string | null
          player: string | null
          player_filename: string | null
          player_image_url: number | null
          player_owned_avg: number | null
          player_owned_espn: number | null
          player_owned_yahoo: number | null
          player_square_image_url: number | null
          pos: string | null
          rank_delta: number | null
          rdr_team: string | null
          scrape_date: string | null
          sd: number | null
          sportsdata_id: number | null
          team: string | null
          team_espn: string | null
          team_fo: string | null
          team_full: string | null
          team_location: string | null
          team_nfl: string | null
          team_nickname: string | null
          team_pff: number | null
          tm: string | null
          worst: number | null
          yahoo_id: number | null
          years_of_experience: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      cleanup_old_staging: {
        Args: { days_old?: number }
        Returns: undefined
      }
      dedupe_all_staging_tables: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      exec_sql: {
        Args: { query: string }
        Returns: Json[]
      }
      get_distinct_dictionary_sources: {
        Args: Record<PropertyKey, never>
        Returns: {
          source_table: string
        }[]
      }
      get_dynasty_ranks: {
        Args: Record<PropertyKey, never>
        Returns: {
          player: string
          pos: string
          ecr: number
          age: number
          rdr_team: string
          team_full: string
          years_of_experience: number
        }[]
      }
      promote_staging_to_public: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
