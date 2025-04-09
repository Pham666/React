// App.jsx
import Greeting from "./Greeting";
import YoutubeIntro from "./YoutubeIntro";

export default function App() {
  return (
    <div className="p-6 text-center space-y-4">
      <Greeting />
      <YoutubeIntro />
    </div>
  );
}
