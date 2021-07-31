DROP TABLE IF EXISTS goals CASCADE;

CREATE TABLE goals (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  budget_id INTEGER NOT NULL REFERENCES budgets(id) ON DELETE CASCADE,
  amount_to_goal MONEY NOT NULL DEFAULT 0,
  start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  end_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);