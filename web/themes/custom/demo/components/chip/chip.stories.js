import chip from "./chip.twig";
import "./chip.css";

export default {
  title: "Components/Chip",
  component: chip
}

export const Default = {
  args: {
    color: "primary",
    dismissable: true,
    chip_content: "Lorem ipsum",
    
  }
}