"use server";

import { createClient } from "@/utils/supabase/server";

export async function addTopic(uuid: string) {
  const supabase = createClient();

  await supabase
    .from("notes")
    .insert([{ this_topic: uuid, topic: "", note: "" }]);
}
