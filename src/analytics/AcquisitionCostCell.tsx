import { TextInput } from 'grommet/components/TextInput';
import React, { useState } from 'react';
import { fromCentsToDollars } from 'src/common/fromCentsToDollars';

interface Props {
  ac: number;
  channel: string;
  updateChannelAc: (channel: string, ac: number) => void;
}

export const AcquisitionCostCell = ({
  ac,
  channel,
  updateChannelAc,
}: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [localAc, setLocalAc] = useState('');

  const enterEditMode = () => {
    setEditMode(true);
    setLocalAc(fromCentsToDollars(ac));
  };
  const exitEditMode = () => {
    setEditMode(false);
    const newAcValue = (Number(localAc) * 100) | 0;
    if (newAcValue !== ac) {
      updateChannelAc(channel, newAcValue);
    }
  };

  return (
    <div>
      {editMode && (
        <TextInput
          onBlur={exitEditMode}
          value={localAc}
          onChange={(event) => setLocalAc(event.target.value)}
        />
      )}
      {!editMode && <div onClick={enterEditMode}>{fromCentsToDollars(ac)}</div>}
    </div>
  );
};
