import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { LegendDto } from '../dto/legend.dto';

@Injectable({
  providedIn: 'root',
})
export class LegendsService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async getLegends(): Promise<LegendDto[]> {
    const { data, error } = await this.supabase
      .from<LegendDto>('legends')
      .select('*');

    if (error) {
      console.error(`Ophalen legends gaat niet goed: ${error}`);
    }

    return data || [];
  }

  async addLegend(name: string): Promise<LegendDto | null> {
    const { data, error } = await this.supabase
      .from<LegendDto>('legends')
      .insert([{ name }])
      .single();

    if (error) {
      console.error(`Create legend gaat niet goed: ${error}`);
    }

    return data;
  }
}
