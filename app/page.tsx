import { supabase } from "@/utils/supabase/client";

const getAdmin = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

export default async function Home() {
  const admin = getAdmin();

  if (!admin) {
    console.log("none");
  }

  return (
    <main className="h-full flex items-center justify-center">
      <form action="" className="flex flex-col gap-1">
        <input type="email" />
        <input type="password" />
        <input type="submit" />
      </form>
    </main>
  );
}
