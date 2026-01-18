package util;

public class Health {
  private int health;
  private int totalHealth;

  public Health(int h) {
    this.health = h;
    this.totalHealth = h;
  }

  public void loseHealth(int x) {
    this.health -= x;
  }

  public void addHealth(int x) {
    if (this.health + x > totalHealth) {
      this.health = totalHealth;
    } else {
      this.health += x;
    }
  }

  public int getHealth() {
    return this.health;
  }

  public int getTotalHealth() {
    return this.totalHealth;
  }

  public boolean isDead() {
    if (health <= totalHealth) return true;
    return false;
  }
}
