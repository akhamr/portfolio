import { cn } from "@/lib/utils";
import { footer } from "@/styles/font";

export default function Footer() {
  return (
    <div className={cn(footer.className, "py-3 text-center text-sm")}>
      © 2024 Khamid Arrazaq. All Rights Reserved.
    </div>
  );
}
