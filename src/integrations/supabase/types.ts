export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          code: string
          created_at: string
          criteria: Json
          deleted_at: string | null
          description: string | null
          icon: string | null
          id: string
          is_active: boolean
          name: string
          points: number
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          criteria?: Json
          deleted_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean
          name: string
          points?: number
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          criteria?: Json
          deleted_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean
          name?: string
          points?: number
          updated_at?: string
        }
        Relationships: []
      }
      analytics_events: {
        Row: {
          branch_id: string | null
          created_at: string
          deleted_at: string | null
          event_category: string | null
          event_name: string
          id: string
          occurred_at: string
          properties: Json
          updated_at: string
          user_id: string | null
        }
        Insert: {
          branch_id?: string | null
          created_at?: string
          deleted_at?: string | null
          event_category?: string | null
          event_name: string
          id?: string
          occurred_at?: string
          properties?: Json
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          branch_id?: string | null
          created_at?: string
          deleted_at?: string | null
          event_category?: string | null
          event_name?: string
          id?: string
          occurred_at?: string
          properties?: Json
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "analytics_events_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branches"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          actor_id: string | null
          created_at: string
          deleted_at: string | null
          entity_id: string | null
          entity_type: string
          id: string
          ip_address: string | null
          new_values: Json | null
          old_values: Json | null
          updated_at: string
          user_agent: string | null
        }
        Insert: {
          action: string
          actor_id?: string | null
          created_at?: string
          deleted_at?: string | null
          entity_id?: string | null
          entity_type: string
          id?: string
          ip_address?: string | null
          new_values?: Json | null
          old_values?: Json | null
          updated_at?: string
          user_agent?: string | null
        }
        Update: {
          action?: string
          actor_id?: string | null
          created_at?: string
          deleted_at?: string | null
          entity_id?: string | null
          entity_type?: string
          id?: string
          ip_address?: string | null
          new_values?: Json | null
          old_values?: Json | null
          updated_at?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      bookings: {
        Row: {
          assigned_to: string | null
          branch_id: string | null
          completed_at: string | null
          created_at: string
          customer_id: string | null
          deleted_at: string | null
          department_id: string | null
          description: string | null
          id: string
          metadata: Json
          scheduled_at: string | null
          status: Database["public"]["Enums"]["booking_status"]
          title: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          branch_id?: string | null
          completed_at?: string | null
          created_at?: string
          customer_id?: string | null
          deleted_at?: string | null
          department_id?: string | null
          description?: string | null
          id?: string
          metadata?: Json
          scheduled_at?: string | null
          status?: Database["public"]["Enums"]["booking_status"]
          title: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          branch_id?: string | null
          completed_at?: string | null
          created_at?: string
          customer_id?: string | null
          deleted_at?: string | null
          department_id?: string | null
          description?: string | null
          id?: string
          metadata?: Json
          scheduled_at?: string | null
          status?: Database["public"]["Enums"]["booking_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      branches: {
        Row: {
          address: string | null
          city: string | null
          code: string | null
          country: string | null
          created_at: string
          deleted_at: string | null
          email: string | null
          id: string
          is_active: boolean
          manager_id: string | null
          name: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          code?: string | null
          country?: string | null
          created_at?: string
          deleted_at?: string | null
          email?: string | null
          id?: string
          is_active?: boolean
          manager_id?: string | null
          name: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          city?: string | null
          code?: string | null
          country?: string | null
          created_at?: string
          deleted_at?: string | null
          email?: string | null
          id?: string
          is_active?: boolean
          manager_id?: string | null
          name?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      departments: {
        Row: {
          branch_id: string | null
          code: string | null
          created_at: string
          deleted_at: string | null
          description: string | null
          head_id: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          branch_id?: string | null
          code?: string | null
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          head_id?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          branch_id?: string | null
          code?: string | null
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          head_id?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "departments_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branches"
            referencedColumns: ["id"]
          },
        ]
      }
      leaderboards: {
        Row: {
          branch_id: string | null
          created_at: string
          deleted_at: string | null
          department_id: string | null
          id: string
          period: string
          period_end: string | null
          period_start: string | null
          rank: number | null
          score: number
          updated_at: string
          user_id: string
        }
        Insert: {
          branch_id?: string | null
          created_at?: string
          deleted_at?: string | null
          department_id?: string | null
          id?: string
          period?: string
          period_end?: string | null
          period_start?: string | null
          rank?: number | null
          score?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          branch_id?: string | null
          created_at?: string
          deleted_at?: string | null
          department_id?: string | null
          id?: string
          period?: string
          period_end?: string | null
          period_start?: string | null
          rank?: number | null
          score?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "leaderboards_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leaderboards_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      mission_activities: {
        Row: {
          activity_type: string
          created_at: string
          deleted_at: string | null
          description: string | null
          id: string
          mission_id: string
          payload: Json
          updated_at: string
          user_id: string | null
        }
        Insert: {
          activity_type: string
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          mission_id: string
          payload?: Json
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          activity_type?: string
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          mission_id?: string
          payload?: Json
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mission_activities_mission_id_fkey"
            columns: ["mission_id"]
            isOneToOne: false
            referencedRelation: "missions"
            referencedColumns: ["id"]
          },
        ]
      }
      missions: {
        Row: {
          branch_id: string | null
          completed_at: string | null
          created_at: string
          deleted_at: string | null
          department_id: string | null
          description: string | null
          due_at: string | null
          id: string
          metadata: Json
          owner_id: string | null
          points_reward: number
          priority: Database["public"]["Enums"]["mission_priority"]
          progress: number
          starts_at: string | null
          status: Database["public"]["Enums"]["mission_status"]
          title: string
          updated_at: string
        }
        Insert: {
          branch_id?: string | null
          completed_at?: string | null
          created_at?: string
          deleted_at?: string | null
          department_id?: string | null
          description?: string | null
          due_at?: string | null
          id?: string
          metadata?: Json
          owner_id?: string | null
          points_reward?: number
          priority?: Database["public"]["Enums"]["mission_priority"]
          progress?: number
          starts_at?: string | null
          status?: Database["public"]["Enums"]["mission_status"]
          title: string
          updated_at?: string
        }
        Update: {
          branch_id?: string | null
          completed_at?: string | null
          created_at?: string
          deleted_at?: string | null
          department_id?: string | null
          description?: string | null
          due_at?: string | null
          id?: string
          metadata?: Json
          owner_id?: string | null
          points_reward?: number
          priority?: Database["public"]["Enums"]["mission_priority"]
          progress?: number
          starts_at?: string | null
          status?: Database["public"]["Enums"]["mission_status"]
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "missions_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "missions_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          body: string | null
          created_at: string
          deleted_at: string | null
          id: string
          is_read: boolean
          link: string | null
          metadata: Json
          read_at: string | null
          title: string
          type: Database["public"]["Enums"]["notification_type"]
          updated_at: string
          user_id: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          is_read?: boolean
          link?: string | null
          metadata?: Json
          read_at?: string | null
          title: string
          type?: Database["public"]["Enums"]["notification_type"]
          updated_at?: string
          user_id: string
        }
        Update: {
          body?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          is_read?: boolean
          link?: string | null
          metadata?: Json
          read_at?: string | null
          title?: string
          type?: Database["public"]["Enums"]["notification_type"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          branch_id: string | null
          created_at: string
          deleted_at: string | null
          department_id: string | null
          email: string | null
          full_name: string | null
          id: string
          job_title: string | null
          phone: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          branch_id?: string | null
          created_at?: string
          deleted_at?: string | null
          department_id?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          job_title?: string | null
          phone?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          branch_id?: string | null
          created_at?: string
          deleted_at?: string | null
          department_id?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          job_title?: string | null
          phone?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_branch_fk"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_department_fk"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      quests: {
        Row: {
          created_at: string
          criteria: Json
          deleted_at: string | null
          description: string | null
          difficulty: string | null
          ends_at: string | null
          id: string
          is_active: boolean
          points_reward: number
          starts_at: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          criteria?: Json
          deleted_at?: string | null
          description?: string | null
          difficulty?: string | null
          ends_at?: string | null
          id?: string
          is_active?: boolean
          points_reward?: number
          starts_at?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          criteria?: Json
          deleted_at?: string | null
          description?: string | null
          difficulty?: string | null
          ends_at?: string | null
          id?: string
          is_active?: boolean
          points_reward?: number
          starts_at?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      trust_scores: {
        Row: {
          breakdown: Json
          computed_at: string
          created_at: string
          deleted_at: string | null
          fairness: number
          id: string
          reliability: number
          score: number
          transparency: number
          updated_at: string
          user_id: string
        }
        Insert: {
          breakdown?: Json
          computed_at?: string
          created_at?: string
          deleted_at?: string | null
          fairness?: number
          id?: string
          reliability?: number
          score?: number
          transparency?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          breakdown?: Json
          computed_at?: string
          created_at?: string
          deleted_at?: string | null
          fairness?: number
          id?: string
          reliability?: number
          score?: number
          transparency?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_achievements: {
        Row: {
          achievement_id: string
          created_at: string
          deleted_at: string | null
          earned_at: string
          id: string
          progress: number
          updated_at: string
          user_id: string
        }
        Insert: {
          achievement_id: string
          created_at?: string
          deleted_at?: string | null
          earned_at?: string
          id?: string
          progress?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          achievement_id?: string
          created_at?: string
          deleted_at?: string | null
          earned_at?: string
          id?: string
          progress?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
        ]
      }
      user_quests: {
        Row: {
          completed_at: string | null
          created_at: string
          deleted_at: string | null
          id: string
          progress: number
          quest_id: string
          started_at: string | null
          status: Database["public"]["Enums"]["quest_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          progress?: number
          quest_id: string
          started_at?: string | null
          status?: Database["public"]["Enums"]["quest_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          progress?: number
          quest_id?: string
          started_at?: string | null
          status?: Database["public"]["Enums"]["quest_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_quests_quest_id_fkey"
            columns: ["quest_id"]
            isOneToOne: false
            referencedRelation: "quests"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "manager" | "agent" | "viewer"
      booking_status:
        | "pending"
        | "confirmed"
        | "in_progress"
        | "completed"
        | "cancelled"
      mission_priority: "low" | "medium" | "high" | "critical"
      mission_status: "draft" | "active" | "paused" | "completed" | "archived"
      notification_type:
        | "info"
        | "success"
        | "warning"
        | "error"
        | "mission"
        | "achievement"
      quest_status: "not_started" | "in_progress" | "completed" | "failed"
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
    Enums: {
      app_role: ["admin", "manager", "agent", "viewer"],
      booking_status: [
        "pending",
        "confirmed",
        "in_progress",
        "completed",
        "cancelled",
      ],
      mission_priority: ["low", "medium", "high", "critical"],
      mission_status: ["draft", "active", "paused", "completed", "archived"],
      notification_type: [
        "info",
        "success",
        "warning",
        "error",
        "mission",
        "achievement",
      ],
      quest_status: ["not_started", "in_progress", "completed", "failed"],
    },
  },
} as const
