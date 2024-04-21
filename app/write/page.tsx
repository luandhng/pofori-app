import { Notes } from "@/components/notes";
import { Topics } from "@/components/topics";
import { createClient } from "@/utils/supabase/server";

const Write = async () => {
  const supabase = createClient();
  let { data: notes } = await supabase
    .from("notes")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="h-full lg:grid lg:grid-cols-12">
      <Topics notes={notes} />
      <Notes />
    </main>
  );
};

export default Write;
