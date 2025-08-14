import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { Player } from "@/hooks/usePlayerData";

interface PlayerFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (player: Player) => void;
  player?: Player;
}

export function PlayerFormDialog({
  open,
  onOpenChange,
  onSave,
  player,
}: PlayerFormDialogProps) {
  const [form, setForm] = useState({
    player: "",
    pos: "",
    ecr: "",
    age: "",
    rdr_team: "",
    team_full: "",
    years_of_experience: "",
  });

  useEffect(() => {
    if (player) {
      setForm({
        player: player.player,
        pos: player.pos,
        ecr: String(player.ecr),
        age: String(player.age),
        rdr_team: player.rdr_team,
        team_full: player.team_full,
        years_of_experience:
          player.years_of_experience === null
            ? ""
            : String(player.years_of_experience),
      });
    } else {
      setForm({
        player: "",
        pos: "",
        ecr: "",
        age: "",
        rdr_team: "",
        team_full: "",
        years_of_experience: "",
      });
    }
  }, [player, open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave({
      player: form.player,
      pos: form.pos,
      ecr: Number(form.ecr),
      age: Number(form.age),
      rdr_team: form.rdr_team,
      team_full: form.team_full,
      years_of_experience:
        form.years_of_experience === ""
          ? null
          : Number(form.years_of_experience),
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{player ? "Edit Player" : "Add Player"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <Label htmlFor="player">Name</Label>
            <Input id="player" name="player" value={form.player} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pos">Position</Label>
            <Input id="pos" name="pos" value={form.pos} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" type="number" value={form.age} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ecr">ECR</Label>
              <Input id="ecr" name="ecr" type="number" value={form.ecr} onChange={handleChange} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="rdr_team">Team</Label>
            <Input id="rdr_team" name="rdr_team" value={form.rdr_team} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="team_full">Team Full</Label>
            <Input id="team_full" name="team_full" value={form.team_full} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="years_of_experience">Years of Experience</Label>
            <Input
              id="years_of_experience"
              name="years_of_experience"
              type="number"
              value={form.years_of_experience}
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

