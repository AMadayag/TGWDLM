package entity;

import util.Position;

public interface Entity {
  public int getHealth();

  // returns true if health loss results in death
  public boolean loseHealth();

  public void recoverHealth(int x);

  public Position getPos();

  public void updatePos(int x, int y);
}
