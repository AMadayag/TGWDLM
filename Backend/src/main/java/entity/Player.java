package entity;
import util.Health;
import util.Position;

public class Player implements Entity {
  private final int MAX_AMMO = 8;
  private final int MAX_HEALTH = 10;

  private Health health = new Health(MAX_HEALTH);
  private Position pos = new Position(0, 0);
  private int ammo = MAX_AMMO;

  public Player() {}

  @Override
  public int getHealth() {
    return this.health.getHealth();
  }

  @Override
  public Position getPos() {
    return this.pos;
  }

  public int getAmmo() {
    return this.ammo;
  }

  @Override
  public boolean loseHealth() {
    this.health.loseHealth(1);
    if (this.health.isDead()) return true;
    return false;
  }

  @Override
  public void recoverHealth(int x) {
    this.health.addHealth(x);
  }

  @Override
  public void updatePos(int x, int y) {
    this.pos = new Position(x, y);
  }

  // returns true if ammo was successfuly reduced
  // returns false if ammo is empty
  public boolean reduceAmmo() {
    if (this.ammo == 0) {
      return false;
    } else {
      this.ammo--;
      return true;
    }
  }

  public void reload() {
    this.ammo = MAX_AMMO;
  }
}
