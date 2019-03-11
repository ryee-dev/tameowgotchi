import React from 'react';
import {
  BrownTabbySmile,
  BrownTabbyAngwy,
  BrownTabbyAhhh,
  BrownTabbyBlep,
  BrownTabbyDitto,
  BrownTabbyHasBite,
  BrownTabbyLmao,
  BrownTabbyOmg,
  BrownTabbyWhatever,
  BrownTabbyYiss,
} from '../assets/images/browntabby';
import {
  BombaySmile,
  BombayAhhh,
  BombayAngwy,
  BombayBlep,
  BombayDitto,
  BombayHasBite,
  BombayLmao,
  BombayOmg,
  BombayWhatever,
  BombayYiss,
} from '../assets/images/bombay';
import {
  ExoticShorthairSmile,
  ExoticShorthairAhhh,
  ExoticShorthairAngwy,
  ExoticShorthairBlep,
  ExoticShorthairDitto,
  ExoticShorthairHasBite,
  ExoticShorthairLmao,
  ExoticShorthairOmg,
  ExoticShorthairWhatever,
  ExoticShorthairYiss,
} from '../assets/images/exoticshorthair';
import {
  SiameseSmile,
  SiameseAhhh,
  SiameseAngwy,
  SiameseBlep,
  SiameseDitto,
  SiameseHasBite,
  SiameseLmao,
  SiameseOmg,
  SiameseWhatever,
  SiameseYiss,
} from '../assets/images/siamese';
import {
  MaineCoonSmile,
  MaineCoonAhhh,
  MaineCoonAngwy,
  MaineCoonBlep,
  MaineCoonDitto,
  MaineCoonHasBite,
  MaineCoonLmao,
  MaineCoonOmg,
  MaineCoonWhatever,
  MaineCoonYiss,
} from '../assets/images/mainecoon';

interface CatProps {
  egg: string;
  hunger: number;
  happiness: number;
  hygiene: number;
  mood: string;
  started: boolean;
  setMood: (mood: string) => void;
}

const CatRender: React.FC<CatProps> = (props: CatProps) => {
  const { egg, hunger, happiness, hygiene, mood, started, setMood } = props;

  if (started) {
    if (hunger < 5 || happiness < 5 || hygiene < 5) {
      setMood('angwy');
    } else {
      setMood('smile');
    }
  } else {
    setMood('yiss');
  }

  if (egg === 'BrownTabby') {
    if (mood === 'angwy') {
      return <img src={BrownTabbyAngwy} alt={egg} />;
    } else if (mood === 'ahhh') {
      return <img src={BrownTabbyAhhh} alt={egg} />;
    } else if (mood === 'blep') {
      return <img src={BrownTabbyBlep} alt={egg} />;
    } else if (mood === 'ditto') {
      return <img src={BrownTabbyDitto} alt={egg} />;
    } else if (mood === 'drool') {
      return <img src={BrownTabbyHasBite} alt={egg} />;
    } else if (mood === 'lmao') {
      return <img src={BrownTabbyLmao} alt={egg} />;
    } else if (mood === 'whatever') {
      return <img src={BrownTabbyWhatever} alt={egg} />;
    } else if (mood === 'yiss') {
      return <img src={BrownTabbyYiss} alt={egg} />;
    } else if (mood === 'omg') {
      return <img src={BrownTabbyOmg} alt={egg} />;
    }
    return <img src={BrownTabbySmile} alt={egg} />;
  }

  if (egg === 'Bombay') {
    if (mood === 'angwy') {
      return <img src={BombayAngwy} alt={egg} />;
    } else if (mood === 'ahhh') {
      return <img src={BombayAhhh} alt={egg} />;
    } else if (mood === 'blep') {
      return <img src={BombayBlep} alt={egg} />;
    } else if (mood === 'ditto') {
      return <img src={BombayDitto} alt={egg} />;
    } else if (mood === 'drool') {
      return <img src={BombayHasBite} alt={egg} />;
    } else if (mood === 'lmao') {
      return <img src={BombayLmao} alt={egg} />;
    } else if (mood === 'whatever') {
      return <img src={BombayWhatever} alt={egg} />;
    } else if (mood === 'yiss') {
      return <img src={BombayYiss} alt={egg} />;
    } else if (mood === 'omg') {
      return <img src={BombayOmg} alt={egg} />;
    }
    return <img src={BombaySmile} alt={egg} />;
  }

  if (egg === 'ExoticShorthair') {
    if (mood === 'angwy') {
      return <img src={ExoticShorthairAngwy} alt={egg} />;
    } else if (mood === 'ahhh') {
      return <img src={ExoticShorthairAhhh} alt={egg} />;
    } else if (mood === 'blep') {
      return <img src={ExoticShorthairBlep} alt={egg} />;
    } else if (mood === 'ditto') {
      return <img src={ExoticShorthairDitto} alt={egg} />;
    } else if (mood === 'drool') {
      return <img src={ExoticShorthairHasBite} alt={egg} />;
    } else if (mood === 'lmao') {
      return <img src={ExoticShorthairLmao} alt={egg} />;
    } else if (mood === 'whatever') {
      return <img src={ExoticShorthairWhatever} alt={egg} />;
    } else if (mood === 'yiss') {
      return <img src={ExoticShorthairYiss} alt={egg} />;
    } else if (mood === 'omg') {
      return <img src={ExoticShorthairOmg} alt={egg} />;
    }
    return <img src={ExoticShorthairSmile} alt={egg} />;
  }

  if (egg === 'Siamese') {
    if (mood === 'angwy') {
      return <img src={SiameseAngwy} alt={egg} />;
    } else if (mood === 'ahhh') {
      return <img src={SiameseAhhh} alt={egg} />;
    } else if (mood === 'blep') {
      return <img src={SiameseBlep} alt={egg} />;
    } else if (mood === 'ditto') {
      return <img src={SiameseDitto} alt={egg} />;
    } else if (mood === 'drool') {
      return <img src={SiameseHasBite} alt={egg} />;
    } else if (mood === 'lmao') {
      return <img src={SiameseLmao} alt={egg} />;
    } else if (mood === 'whatever') {
      return <img src={SiameseWhatever} alt={egg} />;
    } else if (mood === 'yiss') {
      return <img src={SiameseYiss} alt={egg} />;
    } else if (mood === 'omg') {
      return <img src={SiameseOmg} alt={egg} />;
    }
    return <img src={SiameseSmile} alt={egg} />;
  }

  if (egg === 'MaineCoon') {
    if (mood === 'angwy') {
      return <img src={MaineCoonAngwy} alt={egg} />;
    } else if (mood === 'ahhh') {
      return <img src={MaineCoonAhhh} alt={egg} />;
    } else if (mood === 'blep') {
      return <img src={MaineCoonBlep} alt={egg} />;
    } else if (mood === 'ditto') {
      return <img src={MaineCoonDitto} alt={egg} />;
    } else if (mood === 'drool') {
      return <img src={MaineCoonHasBite} alt={egg} />;
    } else if (mood === 'lmao') {
      return <img src={MaineCoonLmao} alt={egg} />;
    } else if (mood === 'whatever') {
      return <img src={MaineCoonWhatever} alt={egg} />;
    } else if (mood === 'yiss') {
      return <img src={MaineCoonYiss} alt={egg} />;
    } else if (mood === 'omg') {
      return <img src={MaineCoonOmg} alt={egg} />;
    }
    return <img src={MaineCoonSmile} alt={egg} />;
  }

  return null;
};

export default CatRender;
