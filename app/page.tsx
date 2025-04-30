import FretboardControls from "@/components/fretboard-controls/FretboardControls";
import Fretboard from "@/components/fretboard/Fretboard";
import Navbar from "@/components/navbar/Navbar";
import '../scss/globals.scss';

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <FretboardControls />
      <Fretboard />
    </div>
  );
}
